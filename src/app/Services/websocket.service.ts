import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private webSocketSubject: WebSocketSubject<any>;

  constructor() {
    const webSocketUrl = 'ws://localhost:8000/ws/realtime-data/';
    this.webSocketSubject = new WebSocketSubject(webSocketUrl);
  }


  sendMessage(message: any) {
    console.log( this.webSocketSubject.next(message))
    this.webSocketSubject.next(message);
  }

getMessage() {

  return this.webSocketSubject.asObservable();
}
}
