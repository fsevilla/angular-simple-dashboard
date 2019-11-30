import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';
import { faPencilAlt  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Array<Post>;

  editIcon = faPencilAlt;

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
