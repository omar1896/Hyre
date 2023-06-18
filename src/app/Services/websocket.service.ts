import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private webSocketSubject: WebSocketSubject<any>;

  constructor() {
    const webSocketUrl = 'ws://127.0.0.1:8000/ws/socket-server/';
    this.webSocketSubject = new WebSocketSubject(webSocketUrl);
  }


  sendMessage(message: any) {

    try {
      this.webSocketSubject.next(message);
    } catch (error) {
     this.webSocketSubject.error({ code: 1000, reason: 'WebSocket error' });
    }
  }

getMessage() {
  console.log(this.webSocketSubject.asObservable())

  return this.webSocketSubject.asObservable();
}
}

