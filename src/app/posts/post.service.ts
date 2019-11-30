import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  getPosts():Promise<any> {
    const url = environment.apiUrl + 'posts';
    return this.httpClient.get(url).toPromise();
  }

  getPostDetails(id) {
    return this.httpClient.get(environment.apiUrl+'posts/'+id).toPromise();
  }
}
