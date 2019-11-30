import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  protected endpoint:string = '';

  constructor(private httpClient:HttpClient) { }

  getAll():Promise<any> {
    const url = environment.apiUrl + this.endpoint;
    return this.httpClient.get(url).toPromise();
  }

  get(id):Promise<any> {
    const url = `${environment.apiUrl}${this.endpoint}/${id}`;
    return this.httpClient.get(url).toPromise();
  }

  create(data:any):Promise<any> {
    const url = environment.apiUrl + this.endpoint;
    return this.httpClient.post(url, data).toPromise();
  }

  update(id, data:any) {}

  delete(id) {}
}
