import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from '../services/datas.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private pageTitle:string='Login';
  constructor(private Auth : AuthenticationService, private router : Router, private __data : DataService) { }

  ngOnInit() {
  }
  ngDoCheck(){
    this.__data.updateTitle(this.pageTitle);
  }
  signIn(user){
    this.Auth.logIn(user)
    
  }
  goHome(){
    this.router.navigate(['home']);
  }

  
}
