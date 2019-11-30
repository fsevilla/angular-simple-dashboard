import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient:HttpClient) { }

  getUsers() {
    return this.httpClient.get(this.apiUrl).toPromise();
  }

  getUserDetails(id) {
    const url = this.apiUrl + '/' + id;
    return this.httpClient.get(url).toPromise();
  }

  getUserPosts(userId) {
    const url = `${this.apiUrl}/${userId}/posts`;
    return this.httpClient.get(url).toPromise();
  }
}
