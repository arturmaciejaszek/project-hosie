import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

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

  constructor(private route: ActivatedRoute,
    private db: AngularFirestore,
    private afs: AngularFireStorage) { }

  ngOnInit() {
    this.subs.push(this.route.params.subscribe( param =>
      this.profileUID = param.id
    ));
    this.subs.push(this.db.doc(`users/${this.profileUID}`)
      .valueChanges().subscribe( hostess => {
        this.hostess = hostess;
        this.workRange = Object.keys(this.hostess.work).filter( key => this.hostess.work[key]);
        this.info = Object.keys(this.hostess.info);
        this.langs = Object.keys(this.hostess.langs);
        this.photos = this.getGallery().map( link => new ImageItem(link, link));
      })
    );
    this.thumb$ = this.afs.ref(`/${this.profileUID}/thumb`).getDownloadURL();
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
