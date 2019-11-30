import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/posts/post.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  userId:number;
  posts;

  constructor(
    private userService:UserService, 
    private activatedRoute:ActivatedRoute,
    private postService:PostService
  ) {
    this.activatedRoute.params.subscribe(params => {
      console.log('Params: ', params);
      this.userId = params.id;
    });
  }

  ngOnInit() {
    this.postService.getPostsByUser(this.userId)
      .then(response => {
        this.posts = response;
      });
  }

}
