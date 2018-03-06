import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Store } from '@ngrx/store';

import * as fromRoot from '../app.reducer';
import * as UI from '../shared/ui.actions';
import * as Auth from '../auth/auth.actions';


import { AuthData } from './auth-data.model';

@Injectable()
export class AuthService {

    constructor(private af: AngularFireAuth, private store: Store<fromRoot.State>) {
    }

    authMonitor() {
        this.af.authState.subscribe( user => {
            if (user) {
                this.store.dispatch( new Auth.SetAuthenticated() );
            } else {
                this.store.dispatch( new Auth.SetUnauthenticated() );
            }
        });
    }

    login(credentials: AuthData) {
        this.store.dispatch(new UI.StartLoading());
        this.af.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(_ => this.store.dispatch( new UI.StopLoading()) )
            .catch( err => {
                console.log(err);
                this.store.dispatch( new UI.StopLoading());
            });
    }

    register(credentials: AuthData) {
        this.store.dispatch(new UI.StartLoading());
        this.af.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then(_ => this.store.dispatch( new UI.StopLoading()) )
            .catch( err => {
                console.log(err);
                this.store.dispatch( new UI.StopLoading());
            });
    }

    logout() {
        this.af.auth.signOut();
    }

}
