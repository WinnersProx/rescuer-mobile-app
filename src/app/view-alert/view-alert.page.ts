import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/datas.service';
@Component({
  selector: 'app-view-alert',
  templateUrl: './view-alert.page.html',
  styleUrls: ['./view-alert.page.scss'],
})
export class ViewAlertPage implements OnInit {
	private pageTitle:string='Alert Details';
  constructor(private __data:DataService) { }

  ngOnInit() {
  }
  ngDoCheck(){
  	this.__data.updateTitle(this.pageTitle);
  }
}
