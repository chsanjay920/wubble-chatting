import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-right-block',
  templateUrl: './right-block.component.html',
  styleUrls: ['./right-block.component.css']
})
export class RightBlockComponent implements OnInit {

  @Input()
  UsersLogsInfo: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
