import { Component,OnInit, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ChatsService } from '../services/chats.service';
import { ModalController } from '@ionic/angular';
import { ChatInfosPage } from '../chat-infos/chat-infos.page';
import { ProfilePage } from '../profile/profile.page';
import { DataService } from '../services/datas.service'
interface Chats {

}
@Component({
  selector: 'app-tab1',
  templateUrl: 'guides.page.html',
  styleUrls: ['../app.component.scss','guides.page.scss']
})
    
export class GuidesPage implements OnInit{
  private chats:any = [];
  private pageTitle:string = 'Guides';
  constructor(
    private http : HttpClient, 
    private route : Router,
    private toast : ToastController,
    private modal : ModalController,
    private ___data  : DataService,
    private Chats : ChatsService){
    
  }
  ngOnInit(){
    this.chats = Object.values(this.Chats.getAllChats())[0];
  }
  ngDoCheck(){
    this.___data.updateTitle(this.pageTitle)
  }
  async chatInfos(info){
    // create a modal for data sharing instead of routing to another page
    await this.modal.create({
      component : ChatInfosPage,
      componentProps : {
        chatInfos : info
      }
    })
    .then(modal => {
      modal.present()
    });
    //this.route.navigate(['chat', info.user.id]);
  }
  async userProfile(user){
    await this.modal.create({
      component : ProfilePage,
      componentProps : {
        targetUser : user
      }
    })
    .then(modal => {
      modal.present();
    });
  }
  async toastError(error) {
    const toast = await this.toast.create({
      message: `An error occured : ${error.message}  with status : ${error.status}`,
      showCloseButton: true,
      duration : 2000,
      animated : true,
      color : 'danger',
      position: 'bottom',
      closeButtonText: 'OK'
    });
    toast.present();
  }
}
