import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userName = "";

  usersList;

  constructor(private userService:UserService) {}

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

}