import { Injectable } from '@angular/core';
import { HttpClientService, Employee } from '../service/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClientService:HttpClientService
  ) { }
  authenticate(username, password) 
  {
    //Flag is true if the user is admin else false
    //Username and password hardcoded
    this.httpClientService.flag=true;
    if (username === "admin" && password === "password") {
      sessionStorage.setItem('username', username)
      return true;
    }
    else if(username === "Rohan" && password === "password") 
    {
      sessionStorage.setItem('user', username)
      return true;
    }
    else {
      return false;  
    }
  }

  isAdminLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('user')
    console.log(!(user === null))
    
    //Set flag false if user logins
    this.httpClientService.flag=false;
    return !(user === null)
  }
  logOut() {
    //set flag true before logging out
    this.httpClientService.flag=true;  

    //Remove items from storage 
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('user')
  }
}
