import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../Services/websocket.service'
@Component({
  selector: 'app-websocket',

  template: `
    <h1>Web Socket Example</h1>
    <ul>
      <li *ngFor="let message of messages">{{ message }}</li>
    </ul>
  `
})
export class WebsocketComponent {
  messages: any[] = [];

  constructor(private webSocketService: WebsocketService) {}

  ngOnInit() {
    this.webSocketService.getMessage().subscribe(message => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    this.webSocketService.sendMessage('Hello, world!');
  }
}
