import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient:HttpClient) { }

  getPosts():Promise<any> {
    return this.httpClient.get(this.apiUrl).toPromise();
  }

  getPostDetails(id) {
    return this.httpClient.get(this.apiUrl+'/'+id).toPromise();
  }

  getPostsByUser(userId) {
    const url = 'https://jsonplaceholder.typicode.com/posts?userId='+userId;
    return this.httpClient.get(url).toPromise();
  }
}
