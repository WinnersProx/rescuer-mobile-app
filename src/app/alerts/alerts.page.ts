import { Component,OnInit, DoCheck } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ToastController } from '@ionic/angular';
import { DataService } from '../services/datas.service'
@Component({
  selector: 'app-tab2',
  templateUrl: 'alerts.page.html',
  styleUrls: ['../app.component.scss','alerts.page.scss']
})
export class AlertsPage implements OnInit{
  private friends:any[];
  private pageTitle:string = 'Alerts'
  constructor(
    private Users : UsersService, 
    private toast : ToastController,
    private ___data  : DataService){
  }
  ngOnInit(){
    
    this.friends = Object.values(this.Users.getUserFriends())[0];
  }
  ngDoCheck(){
    this.___data.updateTitle(this.pageTitle)
  }
  get getFriends(){
    return this.friends;
  }
  async toastMessage(message, type = ''){
    const toast = await this.toast.create({
      message: `An error occured : ${type === 'error' ? message.message + ', status ' + message.status : message }`,
      showCloseButton: true,
      duration : 2000,
      animated : true,
      color : type === 'error' ? 'danger' : 'secondary',
      position: 'bottom',
      closeButtonText: 'OK'
    });
    toast.present();
  }
}
