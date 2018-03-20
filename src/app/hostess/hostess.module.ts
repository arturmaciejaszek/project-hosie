import { NgModule } from '@angular/core';
import { GalleryModule } from '@ngx-gallery/core';
import { ImageCropperComponent } from 'ng2-img-cropper';

import { SharedModule } from '../shared/shared.module';
import { HostessComponent } from './hostess.component';
import { HostessRoutingModule } from './hostess-routing.module';
import { HostessProfileComponent } from './hostess-profile/hostess-profile.component';
import { HostessCardComponent } from './hostess-card/hostess-card.component';
import { AgePipePipe } from './age-pipe.pipe';
import { CropComponent } from './hostess-card/crop/crop.component';

@NgModule({
    declarations: [
        HostessComponent,
        HostessProfileComponent,
        HostessCardComponent,
        AgePipePipe,
        CropComponent,
        ImageCropperComponent
    ],
    imports: [
        SharedModule,
        HostessRoutingModule,
        GalleryModule.forRoot(),
    ],
    entryComponents: [CropComponent]
})
export class HostessModule {}
