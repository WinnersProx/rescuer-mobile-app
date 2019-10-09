import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/datas.service';
import { AuthenticationService } from '../services/authentication.service';
import { UsersService } from '../services/users.service';
import { Users } from '../interfaces/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['../app.component.scss', './edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
	private pageTitle:string='Profile Edition';
  private user;
  constructor(private __data : DataService, 
    private __auth : AuthenticationService,
    private __user : UsersService,
    private router : Router) { }

  ngOnInit() {
    this.user = this.__auth.getAuthUser().then(auth => {
      this.user = auth;
      return auth;
    });
  }

  ngDoCheck(){
  	this.__data.updateTitle(this.pageTitle);
  }

  updateProfile(user){
    this.__user.updateUserProfile(user).subscribe((res:Users) => {
      this.__auth.setAuthUser(res.data);
      this.__data.successToast(res.message);
      this.router.navigate(['/tabs/view-profile']);
    }, (error:Users) => {
      this.__data.toastError(error.error);
    })
  }
  get authUser(){
    return this.user;
  }

}
