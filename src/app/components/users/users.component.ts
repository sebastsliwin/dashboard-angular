import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../service/shared.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public employee$: Observable<any>
  public sliceStart = 0;
  public sliceEnd = 12;

  constructor(private sharedService: SharedService) {
    this.employee$ = this.sharedService.getUsers().pipe(
      tap(res => console.log(res))
    );
  }

  ngOnInit() {
  }

  changeCard() {

    if (this.sliceStart > 0) {
      this.sliceStart -= 12;
      this.sliceEnd -= 12;
    } else {
      this.sliceStart += 12;
      this.sliceEnd += 12;
    }
  }

}
