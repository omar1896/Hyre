// import { Injectable } from '@angular/core';
// import { WebSocketSubject } from 'rxjs/webSocket';

// @Injectable({
//   providedIn: 'root'
// })
// export class WebsocketService {
//   private webSocketSubject: WebSocketSubject<any>;

//   constructor() {
//     const webSocketUrl = 'ws://127.0.0.1:8000/api/check_interview';
//     this.webSocketSubject = new WebSocketSubject(webSocketUrl);
//   }


//   sendMessage(message: any) {

//     this.webSocketSubject.next(message);
//     this.webSocketSubject.error("err")

//   }

// getMessage() {
//   console.log(this.webSocketSubject.asObservable())

//   return this.webSocketSubject.asObservable();
// }
// }

import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService  {
  private socket: Socket
  constructor() {
    this.socket = new Socket({ url:  })
  }

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }
  getMessage() {
    return this.socket.fromEvent('message').pipe(map((data:any) => data.msg));
  }
}
