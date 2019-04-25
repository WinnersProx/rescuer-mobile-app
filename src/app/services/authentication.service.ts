import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform, LoadingController } from '@ionic/angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Users } from '../interfaces/users';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
let base_url = 'http://localhost/smartchat_api/users/';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private authenticationState = new BehaviorSubject(false);
  public accessToken = null;
  private authUser = null;
 
  constructor(private platform : Platform, 
    private http : HttpClient, 
    private store : Storage, 
    private route : Router,
    private toast : ToastController) { 
    
  }
  errorHandler(error : HttpErrorResponse){
    console.log(error);
  }
  logIn(user){
    let datas = {
      __accessToken : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
      authUser      :
        {
          "id": 2,
          "email": "bihames4vainqueur@gmail.com",
          "created": "2018-03-07T09:55:57+00:00",
          "modified": "2018-03-13T00:17:47+00:00",
          "about": "nothing special!",
          "phone": "+243991264608",
          "avatar": "avatars\/2\/4a6f111232de9b99f69fbb8d8ab45b75.jpg",
          "name": "arsene",
          "slug": "arsene",
          "user_dob": null,
          "user_sex": ""
        }
    };
    this.store.set('__accessToken', datas.__accessToken)
    this.store.set('authUser', datas.authUser);
    this.setToken(datas.__accessToken);
    this.setAuthUser(datas.authUser);
    this.route.navigate(['tabs']);

  }
  
  isAuthenticated(){
    return this.authenticationState.value;
  }
  setToken(token){
    this.accessToken = token;
  }
  
  get getToken(){
    return this.accessToken;
  }
  get getAuthUser(){
    return this.authUser;
  }
  checkToken(){
    this.store.get('__accessToken').then(authToken => {
      this.authenticationState.next(true);
      this.accessToken = authToken
    }, error =>{
      this.authenticationState.next(false);
    });
    return this.authenticationState.value;
    
  }
  setAuthUser(user){
    this.authUser = user;
  }
  logoutUser(){
      this.store.remove('__accessToken').then(() => {
        this.store.remove('authUser').then(() => {
          this.setToken(null);
          this.setAuthUser(null);
          this.route.navigate(['login']);
        })
      });
  }
  async toastError(error) {
    let status = error.status ? error.status :  "no status";
    const toast = await this.toast.create({
      message: `An error occured : ${error.message}  with status : ${status}`,
      showCloseButton: true,
      duration : 10000,
      animated : true,
      color : 'danger',
      position: 'bottom',
      closeButtonText: 'OK'
    });
    toast.present();
  }
}
