import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { UserInterface } from 'src/app/user-interface';

@Component({
  selector: 'app-left-block',
  templateUrl: './left-block.component.html',
  styleUrls: ['./left-block.component.css']
})
export class LeftBlockComponent implements OnInit {
  @Input() Friends: UserInterface[] = [];
  @Output() selectedUserEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
  }
  ngOnInit(): void {
  }
  SelectedUser(selecteduser: any) {
    this.selectedUserEvent.emit(selecteduser);
  }
}
