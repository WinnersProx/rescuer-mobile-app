import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class DataService {
  private initialTitle = new BehaviorSubject('......');
  currentTitle = this.initialTitle.asObservable();
  constructor(private __http : HttpClient, private toast : ToastController,
    private alert : AlertController){}
  updateTitle(title : string){
    this.initialTitle.next(title)
  }
  getGuides(){
    let guides = this.__http.get('../../assets/datas/emergencies.json');
    return guides;
  }
  async toastError(error) {
    let status = error.status ? error.status :  "unknown";
    const toast = await this.toast.create({
      message: `An error occured : ${error.error.error || error}`,
      showCloseButton: true,
      duration : 10000,
      animated : true,
      color : 'danger',
      position: 'bottom',
      closeButtonText: 'OK'
    });
    toast.present();
  }
  async successToast(success) {
    const toast = await this.toast.create({
      message: success,
      showCloseButton: false,
      duration : 5000,
      animated : true,
      color : 'success',
      position: 'top',
      closeButtonText: 'OK'
    });
    toast.present();
  }
  async alertConfirm(message) {
    const alert = await this.alert.create({
      header: 'Confirm!',
      message: message,
      mode:'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            return false;
          }
        }, {
          text: 'Confirm',
          cssClass: 'primary',
          handler: () => {
            return true;
          }
        }
      ]
    });

    await alert.present();
  }
  async toastSError(error) {
    const toast = await this.toast.create({
      message: `An error occured : ${error}`,
      showCloseButton: true,
      duration : 10000,
      animated : true,
      color : 'danger',
      position: 'bottom',
      closeButtonText: 'OK'
    });
    toast.present();
  }
}