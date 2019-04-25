import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private Auth : AuthenticationService, private route : Router) {
  }
  canActivate(next : ActivatedRouteSnapshot, 
    state : RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.Auth.getToken);
    let allow:boolean = !!this.Auth.getToken ? true : false;
    if(allow){
      return allow
    }
    this.route.navigate(['login'])
  }
}
