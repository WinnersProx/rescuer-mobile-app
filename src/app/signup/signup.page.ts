import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/datas.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
	private pageTitle:string='Sign Up';
  constructor(private __data : DataService) { }

  ngOnInit() {
  }
  ngDoCheck(){
  	this.__data.updateTitle(this.pageTitle);
  }

}
