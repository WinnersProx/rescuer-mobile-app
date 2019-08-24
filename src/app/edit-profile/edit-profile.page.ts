import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/datas.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['../app.component.scss', './edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
	private pageTitle:string='Profile Edition';
  constructor(private __data : DataService) { }

  ngOnInit() {
  }

  ngDoCheck(){
  	this.__data.updateTitle(this.pageTitle);
  }

}
