import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/users/user.service';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  users:Array<any> = [];

  // Form properties
  data:Post = {
    title: '',
    body: '',
    userId: ''
  };

  constructor(
    private userService: UserService,
    private postService: PostService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.userService.getUsers()
      .then(response => {
        this.users = response;
      })
      .catch(err => {
        console.error(err);
      });
  }

  createPost(e) {
    console.log('voy a crear el post', this.data);
    this.postService.create(this.data)
      .then(response => {
        console.log('Se creo correctamente', response);
        this.router.navigate(['..'], {
          relativeTo: this.activatedRoute
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  goBack(e) {
    console.log('Quiero regresar!');
    e.preventDefault();
  }

}
