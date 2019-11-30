import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  users:Array<any> = [];

  // Form properties
  userId:string = '';
  title:string;
  body:string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .then(response => {
        this.users = response;
      })
      .catch(err => {
        console.error(err);
      });
  }

  createUser(e) {
    console.log('voy a crear el usuario', this.userId, this.title, this.body);
  }

  goBack(e) {
    console.log('Quiero regresar!');
    e.preventDefault();
  }

}
