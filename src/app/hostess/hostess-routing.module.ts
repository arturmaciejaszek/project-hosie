import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostessComponent } from './hostess.component';
import { HostessProfileComponent } from './hostess-profile/hostess-profile.component';

const routes: Routes = [
  { path: '', component: HostessComponent, children: [
      {path: ':id', component: HostessProfileComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostessRoutingModule { }
