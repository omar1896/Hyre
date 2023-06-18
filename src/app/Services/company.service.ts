import { Injectable } from '@angular/core';
import { Environment } from 'src/Environment/env';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private readonly Base_URL = Environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCompanyData(formData: FormData) {
    return this.http.post(`${this.Base_URL}/company/positions`, formData , {observe:'response'});
  }
  
}