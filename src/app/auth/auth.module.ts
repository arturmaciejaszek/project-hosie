import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { LoginComponent } from './login/login.component';

import { RegisterModule } from './register/register.module';


@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        AuthRoutingModule,
        SharedModule,
        FormsModule,
        RegisterModule,
        AngularFireAuthModule,
    ],
    exports: [
        LoginComponent
    ]
})
export class AuthModule {}
