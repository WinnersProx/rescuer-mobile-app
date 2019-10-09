import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
	private userProfile:Object;
  constructor(private params : NavParams, 
  	private Aroute : ActivatedRoute,
  	private modal : ModalController) { }

  ngOnInit() {
  	this.userProfile = this.params.get('user');
  }
  async dismissMe(){
  	return await this.modal.dismiss();
  }
  get targetUser(){
  	return this.userProfile;
  }

}
