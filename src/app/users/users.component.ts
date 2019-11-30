import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userName = "";

  usersList;

  constructor(
    private userService:UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getUsersList();
  }

  addUser() {
    if(this.userName) {
      this.usersList.push(this.userName);
      this.userName = '';
    }
  }

  addUserWithEnter(e) {
    console.log('Presione una tecla', e);
    if(e.key === 'Enter') {
      this.addUser();
    }
  }

  getUsersList() {
      this.userService.getUsers()
        .then((response) => {
          console.log('Respuesta: ', response);
          this.usersList = response;
        })
        .catch((err) => {
          console.error('Something failed: ', err);
        });
  }

  redirect(id) {
    this.router.navigate([id], {
      relativeTo: this.activatedRoute
    });
  }

}