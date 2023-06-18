import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../Services/websocket.service';
import { Connection, Message } from 'amqp-ts';
@Component({
  selector: 'app-websocket',

  template: ` <p>{{msg}}</p> `,
})
export class WebsocketComponent {
  connection: any;
  msg:any;
  // queueName: any;
  //   messages: any[] = [];

  //   constructor(private webSocketService: WebsocketService) {}

  //   ngOnInit() {
  //     this.webSocketService.getMessage().subscribe(message => {
  //       this.messages.push(message);
  //     });
  //   }

  //   sendMessage() {
  //     this.webSocketService.sendMessage('Hello, world!');
  //   }

  constructor() {
    this.connection = new Connection('amqp://localhost');
    const queueName = `notification`;
    const queue = this.connection.declareQueue(queueName);

    queue.activateConsumer(
      (message: Message) => {

        const notificationMessage = message.getContent();
        // Display the notification message to the user
        console.log(notificationMessage);
        this.msg=notificationMessage

      },
      { noAck: true }
    );
  }
}
