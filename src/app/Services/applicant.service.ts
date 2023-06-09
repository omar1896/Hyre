import { Injectable } from '@angular/core';
import { Environment } from 'src/Environment/env';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApplicantService {
  private readonly Base_URL = Environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendData(formData: FormData, token: any) {
    return this.http.post(
      `${this.Base_URL}tenant/applicants/create/${token}`,
      formData
    );
  }

  getData() {
    return this.http.get(`${this.Base_URL}tenant/applicants/`);
  }

  getDataByPosition(position_id: any) {
    return this.http.get(
      `${this.Base_URL}tenant/applicants/position/${position_id}`
    );
  }

  deleteData(applicant_id: any) {
    console.log('Hello ');
    return this.http.delete(
      `${this.Base_URL}tenant/applicants/${applicant_id}/destroy/`
    );
  }

  generateLink() {
    return this.http.get(`${this.Base_URL}tenant/applicants/formLink`);
  }

  update(applicant_id: any, status: any) {
    return this.http.put(
      `${this.Base_URL}tenant/applicants/${applicant_id}/edit`,
      { status: status }
    );
  }
}
