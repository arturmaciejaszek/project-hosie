import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AngularFireStorage } from 'angularfire2/storage';

import { AuthService } from './../../auth/auth.service';
import * as fromRoot from '../../app.reducer';
import * as fromAuth from '../../auth/auth.reducer';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() navbarEmitter = new EventEmitter<void>();
  isAuth$: Observable<boolean>;
  userSub: Subscription;
  user: any;
  thumb$: Observable<string | null>;

  constructor(public af: AuthService, private store: Store<fromRoot.State>, private afs: AngularFireStorage) { }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuthenticated);
    this.userSub = this.af.user$.subscribe(user => {
      if (user) {
        this.user = user;
        this.thumb$ = this.afs.ref(`/${this.user.uid}/thumb`).getDownloadURL();
      }
    });

  }

  test() {
    console.log();
  }

  openSideNav() {
    this.navbarEmitter.emit();
  }

  onLogout() {
    this.af.logout();
    this.user = null;
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }


}
