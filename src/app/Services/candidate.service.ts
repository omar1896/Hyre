import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Environment} from '../../Environment/env'

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  URL: string
  constructor(private http: HttpClient) {
    this.URL = Environment.apiUrl
   }

  getCandidates(){
    // return this.http.get(this.URL)
    return [{id: 1 , name:"mohamed" , email: "13mohamed.yossef@gmail.com" , position:"Fullstack developer" , hasInterview: true}]
  }

  createInterview(data: any){
    // return this.http.post(this.URL , data)
  }

  deleteInterview(id:any){
    // return this.http.delete(this.URL , id)
  }

  deleteCandidate(id:any){
    // return this.http.delete(this.URL , id)
  }
}
