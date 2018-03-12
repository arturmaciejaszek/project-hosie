import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { User } from './user.model';
import { AuthData } from './auth-data.model';

import * as fromRoot from '../app.reducer';
import * as UI from '../shared/ui.actions';
import * as Auth from '../auth/auth.actions';

@Injectable()
export class AuthService {

    constructor(private af: AngularFireAuth,
        private store: Store<fromRoot.State>,
        private db: AngularFirestore,
        private router: Router ) {
    }

    authMonitor() {
        this.af.authState.subscribe( user => {
            if (user) {
                this.store.dispatch(new UI.StartLoading());
                this.db.collection('users').doc(user.uid).ref.get().then(
                    res => {
                        this.store.dispatch( new Auth.SetAuthenticated({
                        access: res.data().access,
                        uid: user.uid,
                        name: res.data().name
                        }));
                        this.store.dispatch(new UI.StopLoading());
                    });
            } else {
                this.store.dispatch(new Auth.SetUnauthenticated());
            }
        });
    }

    login(credentials: AuthData) {
        this.store.dispatch(new UI.StartLoading());
        this.af.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(_ => {
                this.store.dispatch( new UI.StopLoading());
                this.router.navigate(['/dashboard']);
            })
            .catch( err => {
                console.log(err);
                this.store.dispatch( new UI.StopLoading());
            });
    }

    register(regData) {
        this.store.dispatch(new UI.StartLoading());
        this.af.auth.createUserWithEmailAndPassword(regData.email, regData.password)
            .then( user => {
                this.setAccess(user, regData);
                this.store.dispatch( new UI.StopLoading());
                this.router.navigate(['/dashboard']);
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

    updateData(data) {
        this.store.select(fromRoot.getUID).subscribe( uid => {
            const userRef: AngularFirestoreDocument<any> = this.db.doc(`users/${uid}`);
            userRef.update(data);
        }).unsubscribe();
    }

    private setAccess(userData, regData) {
        const userRef: AngularFirestoreDocument<any> = this.db.doc(`users/${userData.uid}`);
        const data = {
            ...regData,
            password: '',
            uid: userData.uid,
            access: regData.access,
        };
        return userRef.set(data, {merge: true} );
    }

}
