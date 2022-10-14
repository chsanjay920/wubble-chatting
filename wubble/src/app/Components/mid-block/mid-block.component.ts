import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { chatInterface } from 'src/app/chat-interface';
import { WebSocketService } from 'src/app/Services/web-socket.service';
import { UserInterface } from 'src/app/user-interface';
import { DatePipe } from '@angular/common';
import { LMessageInterface } from 'src/app/lmessage-interface';

@Component({
  selector: 'app-mid-block',
  templateUrl: './mid-block.component.html',
  styleUrls: ['./mid-block.component.css']
})
export class MidBlockComponent implements OnInit {

  constructor(private webSocket: WebSocketService) { }

  @Input()
  SelectedUserChat!: UserInterface;
  message: string = "";
  chat: chatInterface[] = [
    { id: 1, message: "hello",time:"06:04" },
    { id: 0, message: "Welcome to wubble",time:"06:30" },
  ];
  
  getTime():string
  {
    const currentdate = new Date();
    return currentdate.getHours()+":"+currentdate.getMinutes();
  }
  ngOnInit(): void {
    this.webSocket.Handler("newMessage").subscribe(Nmessage => {
      this.chat.push({ id: 1, message: "" + Nmessage,time:this.getTime()});
    });
  }
  sendmessage() {
    if (this.message.length > 0) {
      this.webSocket.Emitter("SendMessage",{userdetailes: this.SelectedUserChat, message: this.message});
      this.chat.push({ id: 0, message: this.message,time: this.getTime()});
    }
    this.message = "";
  }
}
