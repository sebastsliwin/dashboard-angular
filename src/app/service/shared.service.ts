import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  public weatherUrl = 'https://api.openweathermap.org/data/2.5/find?units=metric&';
  public employeeUrl = 'http://dummy.restapiexample.com/api/v1/';

  get(url: string) {
    const requestUrl = this.weatherUrl + url;
    return this.http.get(requestUrl);
  }

  getUsers() {
    const requestUrl = this.employeeUrl + 'employees';
    return this.http.get(requestUrl);
  }

  addUser(body: object) {
    const requestUrl = this.employeeUrl + 'create';
    return this.http.post(requestUrl, body);
  }
}
