import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  private auth;

  constructor(private Auth : AuthenticationService, private route : Router) {
  }

  canActivate(next : ActivatedRouteSnapshot, 
    state : RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.Auth.getAuthUser().then(authUser => {
      if(!authUser){
        this.route.navigate(['login']);
        return false;
      }
      return true;
    });
  }
}
