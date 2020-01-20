import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/authService.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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
