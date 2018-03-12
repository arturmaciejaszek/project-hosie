import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AuthService } from './../../auth/auth.service';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() navbarEmitter = new EventEmitter<void>();
  isAuth$: Observable<boolean>;
  name$: Observable<string>;

  constructor(private af: AuthService, private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuthenticated);
    this.name$ = this.store.select(fromRoot.getName);
  }

  openSideNav() {
    this.navbarEmitter.emit();
  }

  onLogout() {
    this.af.logout();
  }

}
