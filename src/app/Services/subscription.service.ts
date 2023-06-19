import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../../Environment/env';


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  public channelWrapper: any;

  URL: string;
  constructor(private http: HttpClient){
    this.URL = Environment.apiUrl+'subscriptions'
  }



  getSubscriptions() {
    return this.http.get(this.URL);
  }
}
