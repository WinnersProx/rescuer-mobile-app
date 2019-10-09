import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/datas.service';
@Component({
  selector: 'app-view-guide',
  templateUrl: './view-guide.page.html',
  styleUrls: ['./view-guide.page.scss'],
})
export class ViewGuidePage implements OnInit {
  private guide:any;
  private currentIndex:number;
  private pageTitle:string;
  private steps;
  constructor(private __data:DataService,
    private activatedR : ActivatedRoute) { }

  ngOnInit() {
    this.currentIndex = +(this.activatedR.snapshot.paramMap.get('guide'));
    this.guide = this.__data.getGuides()
    .subscribe(datas => {
      this.guide = datas[this.currentIndex];
      return this.guide;
    });
  }
  ngDoCheck(){
    this.pageTitle = `Guide-${this.currentIndex + 1}`;
  	this.__data.updateTitle(this.guide.emergency_name);
  }

}
