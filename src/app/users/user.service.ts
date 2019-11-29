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
}
