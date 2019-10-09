import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { DataService } from '../services/datas.service';
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private pageTitle:string='Login';
  constructor(private Auth : AuthenticationService, 
    private router : Router, 
    private __data : DataService
    ) { }

  ngOnInit() {
  }
  ngDoCheck(){
    this.__data.updateTitle(this.pageTitle);
  }
  signIn(user){
    this.Auth.logIn(user).subscribe((res:Users) => {
      this.__data.successToast(res.message);
      this.Auth.setAuthUser(res.data);
      this.router.navigate(['/tabs/guides']);
    }, async error => {
      console.log(error);
      await this.__data.toastError(error);
    });
  }
  goHome(){
    this.router.navigate(['home']);
  }

  
}
