import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as data from '../../assets/JSON/randomnames.json';


interface user
{
  username:string;
}


@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  
  username:user[] = data;
  constructor() {
    
   }
  GetRandomName():Observable<any>
  { 
    return of(this.username[Math.floor (Math.random()*500)]);
  }
  SetNewUserName(newName:string)
  {
    localStorage.setItem("wubbleusername",newName);
    window.location.reload();
  }
  getCurrentUserName():Observable<any>
  {
    if(localStorage.getItem("wubbleusername"))
      return of(localStorage.getItem("wubbleusername"));
    return of("something");
  } 
}
