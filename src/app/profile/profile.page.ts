import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  private user;
  constructor(private modal : ModalController, private params : NavParams) { }

  ngOnInit() {
    this.user = this.params.get('targetUser');
  }
  get getUser(){
    return this.user;
  }
  dismiss(){
    this.modal.dismiss(modal => {
      console.log("Modal dismissed");
    })
  }

}
