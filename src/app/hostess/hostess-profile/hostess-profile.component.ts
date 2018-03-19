import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, UrlSegment } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';
import { AuthService } from '../../auth/auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-hostess-profile',
  templateUrl: './hostess-profile.component.html',
  styleUrls: ['./hostess-profile.component.scss']
})
export class HostessProfileComponent implements OnInit, OnDestroy {
  profileUID: string;
  subs: Subscription[] = [];
  hostess: any;
  thumb$: Observable<string | null>;
  workRange: string[];
  info: string[];
  langs: string[];
  photos: GalleryItem[];
  btn: string;
  editable = false;

  constructor(private route: ActivatedRoute,
    private db: AngularFirestore,
    private afs: AngularFireStorage,
    private auth: AuthService) { }

  ngOnInit() {
    this.fetchUID();
    this.checkIfEditable();
    this.thumb$ = this.afs.ref(`/${this.profileUID}/thumb`).getDownloadURL();
    this.testProfileOwnership();
    this.fetchData();
  }

  fetchUID() {
    this.subs.push(this.route.params.subscribe( (param: Params) => {
      this.profileUID = param.id;
    }));
  }

  checkIfEditable() {
    this.route.url.pipe(take(1)).subscribe( (url: UrlSegment[]) => {
      if (url.length > 1) {
        if (url[1].path === 'edit') {
          this.editable = true;
        }
      }
    });
  }

  testProfileOwnership() {
    this.subs.push(this.auth.user$.subscribe( user => {
      if (user.uid === this.profileUID) {
        this.btn = 'edit';
      } else {
        if (user.uid !== this.profileUID && user.access === 'c') {
          this.btn = 'invite';
        } else {
          this.btn = null;
        }
      }
    }));
  }

  fetchData() {
      this.subs.push(this.db.doc(`users/${this.profileUID}`)
      .valueChanges().subscribe( hostess => {
        this.hostess = hostess;
        this.workRange = Object.keys(this.hostess.work).filter( key => this.hostess.work[key]);
        this.info = Object.keys(this.hostess.info);
        this.langs = Object.keys(this.hostess.langs);
        this.photos = this.getGallery().map( link => new ImageItem(link, link));
      })
    );
  }

  getGallery(): string[] {
    const tmparray: string[] = [];
    (<Array<string>>this.hostess.photos).forEach( url => {
      if (tmparray.length < 10) {
        tmparray.push(url);
      }
    });
    return tmparray;
  }

  ngOnDestroy() {
    this.subs.forEach( sub => sub.unsubscribe());
  }

}
