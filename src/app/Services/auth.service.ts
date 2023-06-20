import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Environment} from "../../Environment/env"
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL=Environment.apiUrl;

  constructor(private http:HttpClient,private router:Router) { 


  }
  register(data:any){

    return this.http.post(`${this.URL}signup`,data)
  }
  signin(data:any){

    return this.http.post(`${this.URL}signin`,data)
  }
  createUser(data:any){

    return this.http.post(`${this.URL}tenant/users`,data)
  }
  isLogedIn(){
    if(localStorage.getItem("Authorization")){
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem("Authorization")
    this.router.navigateByUrl("home")
  }
  getAllUsers() {
    return this.http.get(`${this.URL}tenant/users`);
  }
  deleteUser(id:any){
    return this.http.delete(`${this.URL}tenant/users/${id}/destroy`);


  }
}
