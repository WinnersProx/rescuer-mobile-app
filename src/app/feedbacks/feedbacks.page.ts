import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/datas.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.page.html',
  styleUrls: ['./feedbacks.page.scss'],
})
export class FeedbacksPage implements OnInit {
	private pageTitle:string='Feedbacks';
  constructor(private __data: DataService) { }

  ngOnInit() {
  }
  ngDoCheck(){
  	this.__data.updateTitle(this.pageTitle);
  }

}
