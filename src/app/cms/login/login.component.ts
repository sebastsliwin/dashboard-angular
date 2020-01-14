import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../service/authService.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: ''
  }

  registerInfo = '';
  errorInfo = '';

  constructor(
    private router: Router,
    private authService: AuthService
    ) {}

  login() {
    this.authService.login(this.credentials)
      .then(() => this.router.navigate(['/dashboard']))
      .catch(err => {
        this.errorInfo = err.message;
        this.notification();
      });
  }

  register() {
    this.authService.register(this.credentials)
      .then(() => {
        this.registerInfo = 'Account created, please log in!';
        this.notification();
      })
      .catch(err => {
        this.errorInfo = err.message;
        this.notification();
      });
  }

  notification() {
    setTimeout(() => {
      this.registerInfo = '';
      this.errorInfo = '';
    }, 3000);
  }

  ngOnInit() {
  }

}
