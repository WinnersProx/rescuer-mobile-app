import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TabsService {
	private excludedPages:string[] = [
		'edit-profile', 'view-profile', 'notifications'
  ];
  constructor(private platform : Platform, private router : Router) {
  	this.platform.ready().then(() => {
  		this.navEvents();
  	})
  }

  navEvents(){
  	this.router.events.pipe(filter(e => e instanceof NavigationEnd))
  	.subscribe((e: any) => {
  		this.showAndHideTabs(e);
  	})
  }

  showAndHideTabs(e : NavigationEnd){
  	const urlArray = e.url.split('/');
  	const page = urlArray[2]; // as for my routes
  	const shouldHide = this.excludedPages.indexOf(page) > -1;
  	try{
  		shouldHide ? this.hideTab() : this.showTab();
  	}
  	catch(err){ 
  		console.log(err);
  	}
  	
  }

  hideTab(){
    const tabBar = document.getElementById('customTabBar');
    if(tabBar && tabBar.style.display !== 'none'){
      tabBar.style.display = 'none'
    }
  }

  showTab(){
    const tabBar = document.getElementById('customTabBar');
    if(tabBar && tabBar.style.display !== 'flex'){
      tabBar.style.display = 'flex';
    }
  }

}
