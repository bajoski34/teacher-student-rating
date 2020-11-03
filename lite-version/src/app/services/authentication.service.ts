import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private deployment:string = 'https://www.deployment-url.com';
  private local:string = 'http://127.0.0.1:8000';
  private baseUrl:string = this.local;
  authUrl:string = `${this.baseUrl}/api/auth`;
  private iss = {
    login: `${this.authUrl}/login`,
    register: `${this.authUrl}/register`
  };
  constructor(private http: HttpClient) { }
  login(data){
    return this.http.post(`${this.authUrl}/login`,data)
  }
  handle(token){
    this.set(token);
  }
  set(data){
    localStorage.setItem('t-s-current-user', JSON.stringify(data));
  }
  getToken(){
    let item = JSON.parse(localStorage.getItem('t-s-current-user'));
    if(!item){
      return false;
    }
    return item['access_token'];
  }
  getRole(){
    let item = JSON.parse(localStorage.getItem('t-s-current-user'));
    if(!item){
      return false;
    }
    return item['user']['role'];
  }
  remove(){
    localStorage.removeItem('t-s-current-user');
  }
  isValid(){
    const token = this.getToken();
    if(token){
      const payLoad = this.payLoad(token);
      if(payLoad){
        return Object.values(this.iss).indexOf(payLoad.iss) > -1;
      }
    }
    return false;
  }
  payLoad(token){
    const payload =  token.split('.')[1];
    return this.decode(payload);
  }
  decode(payload){
    return JSON.parse(atob(payload));
  }
  loggedIn(){
    return this.isValid();
  }
  isAdmin(){
    let role = this.getRole();
    return role == 1 ? true : false;
  }
  isTeacher(){
    let role = this.getRole();
    return role == 2 ? true : false;
  }
  isStudent(){
    let role = this.getRole();
    return role == 3 ? true : false;
  }
  getUser(){
    let user = JSON.parse(localStorage.getItem('t-s-current-user'));
    return user ? user : null;
  }
}
