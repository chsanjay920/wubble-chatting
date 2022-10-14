import { Injectable } from '@angular/core';
import { UserInterface } from '../user-interface';

@Injectable({
  providedIn: 'root'
})
export class ChattingService {

  constructor() { }
  sendMessage(To:UserInterface,message:string)
  {
    
  }
}
