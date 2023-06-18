import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../../Environment/env';

@Injectable({
  providedIn: 'root',
})
export class InterviewService {
  URL: string;
  constructor(private http: HttpClient) {
    this.URL = Environment.apiUrl + 'tenant/interviews/';
  }

  getInterviews() {
    return this.http.get(this.URL);
  }

  createInterview(data: any) {
    return this.http.post(this.URL, data);
  }

  deleteInterview(id: any) {
    return this.http.delete(`${this.URL}${id}`);
  }
}
