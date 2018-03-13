import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HostessComponent } from './hostess.component';
import { HostessRoutingModule } from './hostess-routing.module';
import { HostessProfileComponent } from './hostess-profile/hostess-profile.component';
import { HostessEditComponent } from './hostess-profile/hostess-edit/hostess-edit.component';

@NgModule({
    declarations: [
        HostessComponent,
        HostessProfileComponent,
        HostessEditComponent
    ],
    imports: [
        SharedModule,
        HostessRoutingModule
    ]
})
export class HostessModule {}
