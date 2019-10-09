import { Component,OnInit, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { DataService } from '../services/datas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'guides.page.html',
  styleUrls: ['../app.component.scss','guides.page.scss']
})
    
export class GuidesPage implements OnInit{
  private pageTitle:string = 'Guides';
  private guides:any;
  constructor(
    private http : HttpClient, 
    private route : Router,
    private toast : ToastController,
    private modal : ModalController,
    private ___data  : DataService){
    
  }
  ngOnInit(){
    this.___data.getGuides()
    .subscribe(datas => {
      this.guides = datas;
    });
  }
  ngDoCheck(){
    this.___data.updateTitle(this.pageTitle)
  }
  
  viewGuide(index){
    this.route.navigate(['/view-guide', index]);
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
