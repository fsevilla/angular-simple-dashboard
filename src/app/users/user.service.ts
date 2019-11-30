import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getUsers():Promise<any> {
    const url = environment.apiUrl + 'users';
    return this.httpClient.get(url).toPromise();
  }

  getUserDetails(id) {
    const url = environment.apiUrl + 'users/' + id;
    return this.httpClient.get(url).toPromise();
  }
}
