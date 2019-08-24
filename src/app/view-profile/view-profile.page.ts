import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/datas.service';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['../app.component.scss', './view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
	private pageTitle:string='Profile Details';
  constructor(private __data: DataService) { }

  ngOnInit() {
  }
  ngDoCheck(){
  	this.__data.updateTitle(this.pageTitle);
  }

}
