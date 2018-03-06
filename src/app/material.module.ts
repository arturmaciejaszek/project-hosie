import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule
  } from '@angular/material';

@NgModule({
    imports: [
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatButtonModule
    ],
    exports: [
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatButtonModule
    ]
})
export class MaterialModule {}
