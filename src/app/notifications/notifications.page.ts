import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/datas.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
	private pageTitle:string='Notifications';
  constructor(private __data : DataService) { }

  ngOnInit() {
  }
  ngDoCheck(){
  	this.__data.updateTitle(this.pageTitle);
  }
}
