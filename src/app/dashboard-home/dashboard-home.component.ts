import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/authService.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../service/shared.service';
import {environment} from '../../environments/environment';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
// variables
  public city = 'Łódź';
  public weather: object;
  public count = 0;
  public date: string;
  public userEmail: string;

  constructor(private authService: AuthService,
              private router: Router,
              private sharedService: SharedService,
              private route: ActivatedRoute) {
    this.userEmail = this.authService.getUser().email;
    this.sharedService.get(`q=${this.city}&appid=${environment.apiKeyWeather}`)
      .subscribe(res => this.weather = res['list']);
  }

  ngOnInit() {
    const format = 'dd.MM.yyyy';
    const myDate = new Date();
    const locale = 'en-US';
    this.date = formatDate(myDate, format, locale);

    let run;

    run = setInterval(() => {
      if (this.count < 700) {
        this.count++;
      } else {
        clearInterval(run);
      }
    }, 10);
  }
}

