import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform, LoadingController } from '@ionic/angular';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Users } from '../interfaces/users';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
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
    private route : Router) {
    this.platform.ready().then(() => {
      this.initAuth();
    })
  }
  initAuth(){
    this.authUser = this.store.get('auth').then(authUser => {
      this.authUser = authUser;
      return authUser;
    });
  }
  errorHandler(error : HttpErrorResponse){
    console.log(error);
  }
  logIn({email, password}){
    return this.http.post(`${this.baseUrl}auth/signin`, {email, password})
  }
  signUpUser({ first_name, last_name, email, address, phone, password }){
    return this.http.post(`${this.baseUrl}auth/signup`, { first_name, last_name, email, 
      address, phone, password 
    })
  }
  
  isAuthenticated(){
    return this.authenticationState.value;
  }
  
  getAuthUser(){
    return this.store.get('auth').then(auth => auth)
  }
  get getToken(){
    return this.store.get('auth').then(auth => {
      return auth ? auth.token : false;
    });
  }
  checkToken(){
    this.store.get('auth').then(auth => {
      this.authenticationState.next(true);
      this.accessToken = auth.token;
    }, error =>{
      this.authenticationState.next(false);
    });
    return this.authenticationState.value;
  }
  setAuthUser(user){
    this.store.set('auth', user);
    this.authUser = user;
  }
  logoutUser(){
    this.store.remove('auth').then(() => {
      this.setAuthUser(null);
    });
  }
  get getAuth(){
    return this.authUser;
  }
}
