import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket!: Socket;
  constructor() { 
    this.socket = io('http://localhost:8000', { transports : ['websocket'] });
  }

  Emitter(EventName:any,data: any) {
    this.socket.emit(EventName, data);
  }
  
  Handler(EventName:string) {
    return new Observable(observer => {
      this.socket.on(EventName, msg => {
        observer.next(msg);
      });
    });
  }
}
