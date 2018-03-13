import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { User, Client } from './user.model';
import { AuthData } from './auth-data.model';

import * as fromRoot from '../app.reducer';
import * as UI from '../shared/ui.actions';
import * as Auth from '../auth/auth.actions';

@Injectable()
export class AuthService {

    user$: Observable<User | Client>;

    constructor(private af: AngularFireAuth,
        private store: Store<fromRoot.State>,
        private db: AngularFirestore,
        private router: Router ) {

            this.user$ = this.af.authState.switchMap( user => {
                if (user) {
                    this.store.dispatch(new Auth.SetAuthenticated());
                    this.router.navigate(['/dashboard']);
                    return this.db.doc<any>(`users/${user.uid}`).valueChanges();
                } else {
                    this.store.dispatch(new Auth.SetUnauthenticated());
                    return Observable.of(null);
                }
            });
    }

    updateUserData(uid: string, data: any) {
        const userRef: AngularFirestoreDocument<any> = this.db.doc(`users/${uid}`);
        const newData = {
            ...data,
            uid: uid
        };
        userRef.set(newData, {merge: true});
    }

    register(auth: AuthData, data: any) {
        this.store.dispatch( new UI.StartLoading());
        this.af.auth.createUserWithEmailAndPassword(auth.email, auth.password)
            .then( user => {
                this.updateUserData(user.uid, {...data, email: auth.email});
                this.store.dispatch( new UI.StopLoading());
            })
            .catch(err => {
                console.log(err);
                this.store.dispatch( new UI.StopLoading());
            });
    }

    login(credentials: AuthData) {
        this.store.dispatch(new UI.StartLoading());
        this.af.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(_ => {
            this.store.dispatch( new UI.StopLoading());
        })
        .catch( err => {
            console.log(err);
            this.store.dispatch( new UI.StopLoading());
        });
    }

    logout() {
        this.af.auth.signOut();
        this.router.navigate(['/']);
    }

}
