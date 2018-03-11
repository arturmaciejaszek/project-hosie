import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './register/employee/employee.component';
import { ClientComponent } from './register/client/client.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'newclient', component: ClientComponent },
  { path: 'newemployee', component: EmployeeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
