import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';
import { faPencilAlt, faEraser  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Array<Post>;

  editIcon = faPencilAlt;
  deleteIcon = faEraser;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAll()
      .then(response => {
        this.posts = response;
      })
      .catch(err => {
        console.error(err);
      });
  }

  deleteRow(id) {
    // this.postService.deletePost(id)
    //   .then(response => {
    //     alert('Se elimino correctamente el post '+id);
    //     this.getPosts();
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  }

}
