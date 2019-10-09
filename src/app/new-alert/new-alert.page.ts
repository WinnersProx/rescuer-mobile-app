import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ModalController, AlertController } from '@ionic/angular';
import { DataService } from '../services/datas.service';
import { AlertsService } from '../services/alerts.service';
import { Users } from '../interfaces/users';


@Component({
  selector: 'app-new-alert',
  templateUrl: './new-alert.page.html',
  styleUrls: ['./new-alert.page.scss'],
})
export class NewAlertPage implements OnInit {
	private emergencyType:number = 4;
  constructor(private modal: ModalController, 
    private ___datas : DataService,
    private alert : AlertController,
    private ___alerts : AlertsService,
    private platform : Platform) { 
  }

  ngOnInit() {
  }

  newEmergency(){
    this.alertConfirm("Do you really have an emergency, remember you can be convicted for any fake emergency triggered!")
    .then(async alert => {
      await this.modal.dismiss();
    })
  	
  }
  setEmergencyType(type){
  	this.emergencyType = type;
  }
  async cancelEmergency(){
  	await this.modal.dismiss();
  }
  async alertConfirm(message) {
    const alert = await this.alert.create({
      header: 'Warning!!!',
      message: message,
      mode:'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelled');
          }
        }, {
          text: 'Confirm',
          cssClass: 'primary',
          handler: () => {
            this.___alerts.triggerEAllert({ type : this.emergencyType })
             .subscribe((res:Users) => {
                this.___datas.successToast(res.message);
             }, error => {
                this.___datas.toastSError(error);
             });
          }
        }
      ]
    });

    await alert.present();
  }

  

}
