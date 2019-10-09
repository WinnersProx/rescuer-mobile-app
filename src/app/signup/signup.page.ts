import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/datas.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})

export class SignupPage implements OnInit {
	private pageTitle:string='Sign Up';
  constructor(private __data : DataService, 
    private Auth : AuthenticationService,
    private router : Router
    ) { }

  ngOnInit() {
  }
  ngDoCheck(){
  	this.__data.updateTitle(this.pageTitle);
  }
  signUp(user){
    this.Auth.signUpUser(user).subscribe((res:Users) => {
      this.__data.successToast(res.message);
      this.Auth.setAuthUser(res.data);
      this.router.navigate(['/tabs/guides']);
    }, async error => {
      await this.__data.toastError(error);
    });
  }

}
