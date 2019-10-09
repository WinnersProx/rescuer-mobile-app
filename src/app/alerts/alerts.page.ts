import { Component,OnInit, DoCheck } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular'
import { DataService } from '../services/datas.service';
import { AlertsService } from '../services/alerts.service';
import { Users } from '../interfaces/users';
import { ViewAlertPage } from '../view-alert/view-alert.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'alerts.page.html',
  styleUrls: ['../app.component.scss','alerts.page.scss']
})
export class AlertsPage implements OnInit{
  private alerts:any[] = [];
  private pageTitle:string = 'Alerts'
  constructor( 
    private toast : ToastController,
    private ___data  : DataService,
    private ___alerts : AlertsService,
    private modalController : ModalController){
  }
  ngOnInit(){
    this.___alerts.viewAlerts().subscribe(res => {
      this.alerts = Object.values(res)[1];
    }, (error:Users) => {
      this.___data.toastError(error);
    });
  }
  ngDoCheck(){
    this.___data.updateTitle(this.pageTitle)
  }
  
  async viewEmergency(emergency){
    return await this.modalController.create({
      component : ViewAlertPage,
      componentProps : { emergency },
      backdropDismiss : true,
      showBackdrop : true,
      cssClass  : 'view-alert-page',
      animated  : true,
      mode      : 'ios'
    }).then(modal => {
      modal.present()
    })
  }
  approveEmergency(emergency){
    this.___alerts.approveEAllert(emergency).subscribe((res:Users) => {
      this.___data.successToast(res.message);
    }, (error:Users) => {
      this.___data.toastError(error);
    })
    
  }

}
