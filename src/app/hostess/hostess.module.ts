import { NgModule } from '@angular/core';
import { GalleryModule } from '@ngx-gallery/core';

import { SharedModule } from '../shared/shared.module';
import { HostessComponent } from './hostess.component';
import { HostessRoutingModule } from './hostess-routing.module';
import { HostessProfileComponent } from './hostess-profile/hostess-profile.component';
import { HostessEditComponent } from './hostess-profile/hostess-edit/hostess-edit.component';
import { HostessCardComponent } from './hostess-card/hostess-card.component';

@NgModule({
    declarations: [
        HostessComponent,
        HostessProfileComponent,
        HostessEditComponent,
        HostessCardComponent
    ],
    imports: [
        SharedModule,
        HostessRoutingModule,
        GalleryModule.forRoot(),
    ],
})
export class HostessModule {}
