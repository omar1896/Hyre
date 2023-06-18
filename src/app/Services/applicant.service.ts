import { Injectable } from '@angular/core';
import { Environment } from 'src/Environment/env';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  private readonly Base_URL = Environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendData(formData: FormData) {
    return this.http.post(`${this.Base_URL}/tenant/applicants/create/`, formData , {observe:'response'});
  }
  
}
