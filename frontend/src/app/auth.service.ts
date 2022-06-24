import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

//loginUser(user:AnyMxRecord)
//{
 // return this.http.post("http:/localhost:7000/login",user)
//}
  constructor(private http:HttpClient) { }
}
