import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';

import { HeaderComponent } from './header.component';
import { AuthModule } from '../../auth/auth.module';
import { AppRoutingModule } from './../../app-routing.module';


@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        SharedModule,
        AuthModule,
        AppRoutingModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {}

