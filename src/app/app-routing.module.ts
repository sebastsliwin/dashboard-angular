import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './cms/login/login.component';
import {AuthGuardService} from './service/authGuard.service';
import {DashboardComponent} from './cms/dashboard/dashboard.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
