import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/authService.service';
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../service/shared.service";
import {environment} from "../../../environments/environment";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // variables
  public modalIsOpen: boolean;
  public city = 'Łódź';
  public weather: object;
  public count = 0;
  public date: string;
  public userEmail: string;

  constructor(private authService: AuthService,
              private router: Router,
              private sharedService: SharedService) {
    this.userEmail = this.authService.getUser().email;
    this.sharedService.get(`q=${this.city}&appid=${environment.apiKeyWeather}`).subscribe(res => {this.weather = res['list']; console.log(this.weather)});
  }

  ngOnInit() {
    const format = 'dd.MM.yyyy';
    const myDate = new Date();
    const locale = 'en-US';
    this.date = formatDate(myDate, format, locale);

    let run;

    run = setInterval(() => {
      if(this.count < 700) {
        this.count++;
      } else {
        clearInterval(run);
      }
    }, 10)
  }

  openModal() {

    if(this.modalIsOpen) {
      this.modalIsOpen = false;
    } else {
      this.modalIsOpen = true;
    }
  }

  logout() {
    this.authService.logout().then(res => this.router.navigateByUrl('/login'));
  }
}
