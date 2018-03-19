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
  MatGridListModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
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
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule,
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
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule,
    ]
})
export class MaterialModule {}
