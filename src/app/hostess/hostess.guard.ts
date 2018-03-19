import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { take } from 'rxjs/operators';

import { AuthService } from './../auth/auth.service';

@Injectable()
export class HostessGuard implements CanActivate {
    userUID: string;

    constructor(private auth: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.auth.user$.pipe(take(1)).map(user => {
            this.userUID = user.uid;
            if (route.params.id === this.userUID) {
                return true;
            } else {
                return false;
            }
        });
    }
}
