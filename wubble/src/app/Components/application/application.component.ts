import { Component, HostListener, OnInit } from '@angular/core';
import { LMessageInterface } from 'src/app/lmessage-interface';
import { UsernameService } from 'src/app/Services/username.service';
import { WebSocketService } from 'src/app/Services/web-socket.service';
import { UserInterface } from 'src/app/user-interface';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor(private usernameservice: UsernameService, private webSocket: WebSocketService) { }

  name?: any;
  UserLogs: any[] = [];
  UsersList: UserInterface[] = [];
  dummyList: any;
  SelectedClient!: UserInterface;
  ngOnInit(): void {
    this.UserNameSetter();
    this.webSocket.Handler("logs").subscribe(data => {
      this.UserLogs.push(data);
    });
    this.webSocket.Handler("UsersList").subscribe(list => {
      this.dummyList = list;
      this.UsersList.splice(0);
      for (let EachUser in this.dummyList)
        this.UsersList.push({
          username: this.dummyList[EachUser].username,
          SocketID: EachUser
        });
      this.UsersList.splice(this.UsersList.findIndex(({ username }) => username === this.name),1);
    });

    this.webSocket.Emitter("NewUserJoined", { username: this.name });
  }
  generateRandomName() {
    this.usernameservice.GetRandomName().subscribe(Rusername => {
      return Rusername.username;
    })
  }
  userSelected($event: any) {
    this.SelectedClient = $event;
  }
  UserNameSetter() {
    if (localStorage.getItem('wubbleusername'))
      this.name = localStorage.getItem('wubbleusername');
    else
      this.name = prompt("Enter your name");
    if (this.name == "")
      this.name = this.generateRandomName();
    localStorage.setItem("wubbleusername", this.name);
  }
  
}
