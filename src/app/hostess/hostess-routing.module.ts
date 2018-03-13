import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostessComponent } from './hostess.component';
import { HostessProfileComponent } from './hostess-profile/hostess-profile.component';
import { HostessEditComponent } from './hostess-profile/hostess-edit/hostess-edit.component';

const routes: Routes = [
  { path: '', component: HostessComponent, children: [
      {path: ':id', component: HostessProfileComponent},
      {path: ':id/edit', component: HostessEditComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostessRoutingModule { }
