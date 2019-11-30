import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Post } from './post';
import { BaseHttpService } from './../shared/services/base-http.service';
 
@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseHttpService {
  endpoint = 'posts';
}
