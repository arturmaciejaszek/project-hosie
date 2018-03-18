import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatGridListModule
  } from '@angular/material';

@NgModule({
    imports: [
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatButtonModule,
      MatMenuModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
    ],
    exports: [
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatButtonModule,
      MatMenuModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
    ]
})
export class MaterialModule {}
