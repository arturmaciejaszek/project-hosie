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
  MatRadioModule,
  MatDialogModule
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
      MatRadioModule,
      MatDialogModule
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
      MatRadioModule,
      MatDialogModule
    ]
})
export class MaterialModule {}
