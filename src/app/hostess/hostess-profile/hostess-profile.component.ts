import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


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

  constructor(private route: ActivatedRoute, private db: AngularFirestore, private afs: AngularFireStorage) { }

  ngOnInit() {
    this.subs.push(this.route.params.subscribe( param =>
      this.profileUID = param.id
    ));
    this.subs.push(this.db.doc(`users/${this.profileUID}`)
      .valueChanges().subscribe( hostess => {
        this.hostess = hostess;
        this.workRange = Object.keys(this.hostess.work).filter( key => this.hostess.work[key]);
      })
    );
    this.thumb$ = this.afs.ref(`/${this.profileUID}/thumb`).getDownloadURL();
  }

  ngOnDestroy() {
    this.subs.forEach( sub => sub.unsubscribe());
  }

}
