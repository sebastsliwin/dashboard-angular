import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../service/shared.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  public infoMessage: string;

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
  }

  addUser(dataUser: NgForm) {
    if (!dataUser.value.name || !dataUser.value.salary || !dataUser.value.age) {
      this.infoMessage = 'Error, please fill all fields!'
    } else {
      this.sharedService.addUser(dataUser.value).subscribe(res => this.infoMessage = res['status']);
    }

  }

}
