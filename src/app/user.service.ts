import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './user-model';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseUrl ="https://reqres.in/api/users?page=1";
  public baseurl1="https://reqres.in/api/users/<id>";

  constructor(private http: HttpClient) { }

  getuser():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.baseUrl);
  }

  getdetails():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.baseurl1);
    
  }

  
}
