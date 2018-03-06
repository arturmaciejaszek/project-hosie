import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        AngularFireAuthModule,
        AuthRoutingModule
    ],
    exports: [
        LoginComponent,
        RegisterComponent
    ]
})
export class AuthModule {}
