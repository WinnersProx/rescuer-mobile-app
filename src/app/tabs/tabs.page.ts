import { Component,OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { NewAlertPage } from '../new-alert/new-alert.page';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
  private auth;
  constructor(private modalController : ModalController, private __auth : AuthenticationService){}
  ngOnInit(){
    this.auth = this.__auth.getAuthUser().then(authUser => {
        this.auth = authUser;
        return authUser;
    });
  }
  async newEmergencyAlert(){
    return await this.modalController.create({
      component : NewAlertPage,
      cssClass  : 'new-alert-page',
      animated  : true,
      mode      : 'ios'
    }).then(modal => {
      modal.present()
    })
  }
  get authUser(){
    return this.auth;
  }

}
