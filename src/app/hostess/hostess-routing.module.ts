import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostessGuard } from './hostess.guard';
import { HostessComponent } from './hostess.component';
import { HostessProfileComponent } from './hostess-profile/hostess-profile.component';

const routes: Routes = [
  { path: '', component: HostessComponent, children: [
      {path: ':id', component: HostessProfileComponent},
      {path: ':id/edit', component: HostessProfileComponent, canActivate: [HostessGuard]},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [HostessGuard]
})
export class HostessRoutingModule { }
