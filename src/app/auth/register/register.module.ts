import { AuthRoutingModule } from './../auth-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RegisterComponent } from '../register/register.component';
import { ClientComponent } from '../register/client/client.component';
import { EmployeeComponent } from '../register/employee/employee.component';

@NgModule({
    declarations: [
        RegisterComponent,
        EmployeeComponent,
        ClientComponent
    ],
    imports: [
        SharedModule,
        AngularFireAuthModule,
        ReactiveFormsModule,
        AuthRoutingModule
    ]
})
export class RegisterModule {}
