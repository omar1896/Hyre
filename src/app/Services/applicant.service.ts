import { Injectable } from '@angular/core';
import { Environment } from 'src/Environment/env';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  private readonly Base_URL = Environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendData(formData: FormData , token : any) {
    return this.http.post(`${this.Base_URL}/tenant/applicants/create/${token}`, formData , {observe:'response'});
  }

  getData() {
    return this.http.get(`${this.Base_URL}/tenant/positions/`);
  }

  deleteData(applicant_id : any){
    return this.http.delete(`${this.Base_URL}/tenant/applicants/${applicant_id}/destroy/`);
  }
}
