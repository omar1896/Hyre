import { Injectable } from '@angular/core';
import { Environment } from 'src/Environment/env';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private readonly Base_URL = Environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCompanyData(company_token?: any) {
    return this.http.get(`${this.Base_URL}company/positions/${company_token}`);
  }

  getCompanyInfo(){
    return this.http.get(`${this.Base_URL}company`);
  }
  changelogo(data:any){
    return this.http.put(`${this.Base_URL}tenant/image`,data);
  }
  
  
}