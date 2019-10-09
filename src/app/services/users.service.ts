import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform, LoadingController } from '@ionic/angular';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Users } from '../interfaces/users';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';


@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private authenticationState = new BehaviorSubject(false);
  public accessToken = null;
  private authUser = null;
  private baseUrl:string = 'http://localhost:3000/api/v1/';
  private httpOptions = {
    headears : new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded'
    })
  };
  constructor(private platform : Platform, 
    private http : HttpClient, 
    private store : Storage, 
    private route : Router,
    private ___auth : AuthenticationService) { }
  errorHandler(error : HttpErrorResponse){
    console.log(error);
  }
  getAllUsers(){
    return this.http.get(`${this.baseUrl}auth/users`)
  }

  alterUserRole(role,user){
  	return this.http.patch(`${this.baseUrl}auth/${+(user)}/role`, { role })
  }

  updateUserProfile({first_name,last_name,email,address,phone}){
  	return this.http.patch(`${this.baseUrl}auth/profile`, { 
  		first_name,last_name,email,address,phone
  	})
  }  

  viewUProfile(user){
    return this.http.get(`${this.baseUrl}auth/profile/${user}`)
  }
  
}
