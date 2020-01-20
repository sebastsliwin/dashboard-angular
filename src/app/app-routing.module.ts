import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './service/authGuard.service';
import {UsersComponent} from './components/users/users.component';
import {CreateUserComponent} from './components/create-user/create-user.component';
import {DashboardHomeComponent} from './dashboard-home/dashboard-home.component';
import {PortfolioComponent} from './portfolio/portfolio.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard',
  component: DashboardHomeComponent,
  canActivate: [AuthGuardService]},
  {path: 'users', component: UsersComponent},
  {path: 'orders', component: UsersComponent},
  {path: 'customers', component: UsersComponent},
  {path: 'new', component: CreateUserComponent},
  {path: 'portfolio', component: PortfolioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
