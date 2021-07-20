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
    this.httpClientService.flag=false;
    return !(user === null)
  }
  logOut() {
    this.httpClientService.flag=true;  

    sessionStorage.removeItem('username')
    sessionStorage.removeItem('user')
  }
}
