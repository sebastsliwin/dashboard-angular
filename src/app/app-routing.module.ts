import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './cms/login/login.component';
import {AuthGuardService} from './service/authGuard.service';
import {DashboardComponent} from './cms/dashboard/dashboard.component';
import {UsersComponent} from './components/users/users.component';
import {DashboardHomeComponent} from './cms/dashboard-home/dashboard-home.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard',
  component: DashboardHomeComponent,
  canActivate: [AuthGuardService], children: [
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'orders',
        component: UsersComponent
      },
      {
        path: 'customers',
        component: UsersComponent
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
