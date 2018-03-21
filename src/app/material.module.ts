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
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatRadioModule,
      MatDialogModule
    ]
})
export class MaterialModule {}
