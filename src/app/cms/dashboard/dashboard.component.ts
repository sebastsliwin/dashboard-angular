import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/authService.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService) {
    console.log(this.authService.getUser());
  }

  ngOnInit() {
  }

}
