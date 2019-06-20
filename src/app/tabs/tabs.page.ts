import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { NewAlertPage } from '../new-alert/new-alert.page';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage{
  
  constructor(private modalController : ModalController){}

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
}
