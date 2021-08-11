import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
  {
    //Return true only if user and admin logins
    if (this.authService.isAdminLoggedIn())
    {  return true;}
    else if(this.authService.isUserLoggedIn())
    {  return true;}
    this.router.navigate(['login']);
    return false;

  }

}
