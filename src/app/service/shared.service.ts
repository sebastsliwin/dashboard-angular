import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  public apiUrl = 'https://api.openweathermap.org/data/2.5/find?units=metric&';

  get(url: string) {
    this.apiUrl += url;
    return this.http.get(this.apiUrl);
  }
}
