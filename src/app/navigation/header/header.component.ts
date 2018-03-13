import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AuthService } from './../../auth/auth.service';
import * as fromRoot from '../../app.reducer';
import * as fromAuth from '../../auth/auth.reducer';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() navbarEmitter = new EventEmitter<void>();
  isAuth$: Observable<boolean>;
  userSub: Subscription;
  user: any = '';

  constructor(public af: AuthService, private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuthenticated);
    this.userSub = this.af.user$.subscribe(res => this.user = res);
  }

  test() {
    console.log();
  }

  openSideNav() {
    this.navbarEmitter.emit();
  }

  onLogout() {
    this.af.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }


}
