import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UsersService } from '../users.service';
import { User } from '../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any;

  show = false;

  constructor(private service:UsersService){

  }

  ngOnInit() {
    this.users = [];
  }

  getUsers() {
    this.show = true;
    this.service.getUsers()
    .subscribe(response => {
      this.users = response;
    });
  }


}
