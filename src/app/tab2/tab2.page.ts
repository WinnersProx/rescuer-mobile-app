import { Component,OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  private friends:any[];
  constructor(private Users : UsersService, private toast : ToastController){

  }
  ngOnInit(){
    this.friends = Object.values(this.Users.getUserFriends())[0];
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
