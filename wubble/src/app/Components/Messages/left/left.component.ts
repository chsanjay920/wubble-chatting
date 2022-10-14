import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  @Input()
  Text!:any;
  constructor() { }
  ngOnInit(): void {
  }

}
