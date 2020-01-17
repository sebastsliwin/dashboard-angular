import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/authService.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // variables
  public modalIsOpen: boolean;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  openModal() {

    if (this.modalIsOpen) {
      this.modalIsOpen = false;
    } else {
      this.modalIsOpen = true;
    }
  }

  logout() {
    this.authService.logout().then(res => this.router.navigateByUrl('/login'));
  }
}
