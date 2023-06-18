import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Environment} from "../../Environment/env"
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private URL=Environment.apiUrl;
  constructor(private http:HttpClient) { 

  }
  register(data:any){

    return this.http.post(`${this.URL}/signup`,data)
  }
  signin(data:any){

    return this.http.post(`${this.URL}/signin`,data)
  }
}
