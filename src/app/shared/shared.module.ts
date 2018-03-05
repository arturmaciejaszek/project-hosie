import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './../material.module';

@NgModule({

    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        TranslateModule
    ],
    exports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        TranslateModule
    ]
})
export class SharedModule {}
