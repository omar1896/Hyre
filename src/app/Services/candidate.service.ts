import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Environment} from '../../Environment/env'

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  URL: string
  constructor(private http: HttpClient) {
    this.URL = Environment.apiUrl + 'tenant/candidates'
   }

  getCandidates(){
    return this.http.get(this.URL)
  }

  deleteCandidate(id:any){
    return this.http.delete(`${this.URL}/${id}`);
  }


}
