import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/datas.service';
import { UsersService } from '../services/users.service';
import { ModalController } from '@ionic/angular'
import { UserProfilePage } from '../user-profile/user-profile.page';
import { AuthenticationService } from '../services/authentication.service';
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['../app.component.scss','./users.page.scss'],
})
export class UsersPage implements OnInit {
	private pageTitle:string = 'Users';
	private users;
  constructor(private ___data : DataService, 
  	private ___users : UsersService, 
  	private modalController : ModalController,
  	private ___auth : AuthenticationService) { }

  ngOnInit() {
  	this.___users.getAllUsers().subscribe(data => {
  		this.users = Object.values(data)[1];
  	}, error => {
  		console.log(error);
  	})
  }
  ngDoCheck(){
  	this.___data.updateTitle(this.pageTitle);
  }
  async viewUserProfile(user){
  	return await this.modalController.create({
      component : UserProfilePage,
      componentProps : { user },
      backdropDismiss : true,
      showBackdrop : true,
      cssClass  : 'new-alert-page',
      animated  : true,
      mode      : 'ios'
    }).then(modal => {
      modal.present()
    })
  }
  alterRole(role, user){
  	this.___users.alterUserRole(role,user).subscribe((res:Users) => {
  		this.___data.successToast(res.message);
  	},
  	(error:Users) => {
  		this.___data.toastError(error.error);
  	});
  }
  get getUsers(){
  	return this.users;
  }
  get authUser(){
  	return this.___auth.getAuth;
  }
}
