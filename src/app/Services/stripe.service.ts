import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../Environment/env';


@Injectable({
  providedIn: 'root'
})
export class StripeService {

  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = Environment.apiUrl + 'stripe/create-checkout-session/'
  }

  createCheckoutSession(data: any){
    return this.http.post(this.URL, data);
  }
  redirect(url:any,data: any){
    return this.http.post(`${Environment.apiUrl}stripe/checkout${url}`,data);
  }
}
