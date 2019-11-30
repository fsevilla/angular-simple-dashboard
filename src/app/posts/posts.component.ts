import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Array<any>;
  editIcon = faEdit;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
      .then(response => {
        this.posts = response;
      })
      .catch(err => {
        console.error(err);
      });
  }

}
