import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-alert',
  templateUrl: './new-alert.page.html',
  styleUrls: ['./new-alert.page.scss'],
})
export class NewAlertPage implements OnInit {
	private emergencyType:string = '';
  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

  async newEmergency(){
  	await this.modal.dismiss();
  }
  setEmergencyType(type){
  	this.emergencyType = type;
  }
  async cancelEmergency(){
  	await this.modal.dismiss();
  }

}
