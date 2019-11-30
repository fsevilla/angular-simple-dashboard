import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postId:number;
  post:any = {};

  constructor(
    private activatedRoute:ActivatedRoute,
    private postService:PostService
  ) { 
    this.activatedRoute.params.subscribe(params => {
      this.postId = params.id;
    })
  }

  ngOnInit() {
    this.postService.get(this.postId)
      .then(response => {
        this.post = response;
      })
      .catch(err => {
        console.error(err);
      });
  }

}
