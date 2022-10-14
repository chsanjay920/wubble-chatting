import { Component, OnInit } from '@angular/core';
import { faUserPen,faCircleXmark,faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons';
import { UsernameService } from 'src/app/Services/username.service';

@Component({
  selector: 'app-changeuser-name',
  templateUrl: './changeuser-name.component.html',
  styleUrls: ['./changeuser-name.component.css']
})
export class ChangeuserNameComponent implements OnInit {

  constructor(private usernameservice:UsernameService) { }
  userpen = faUserPen;
  close = faCircleXmark;
  spark = faSprayCanSparkles;

  formshow:boolean=false;
  username:string = "";
  newName:any= "";
  ngOnInit(): void {
    this.usernameservice.getCurrentUserName().subscribe(name=>{
      this.username = name;
    })
  } 
  toggleForm()
  {
    this.formshow = !this.formshow;
  }

  changeusername()
  {
    this.usernameservice.SetNewUserName(this.newName);
  }
  getRandomName()
  {
    this.usernameservice.GetRandomName().subscribe(Rname =>{
      this.newName = Rname.username;
    });
  }
}
