import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from '../services/authentication.service';

// import { SuperTabs } from 'ionic2-super-tabs';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  
  pages = [
    {
      pageName : 'Tab1Page',
      title : 'Chats',
      icon : 'chatbubbles',
      id   : 'Tab1Page'
    },
    {
      pageName : 'Tab2Page',
      title : 'Friends',
      icon : 'users',
      id   : 'Tab2Page'
    },
    {
      pageName : 'Tab3Page',
      title : 'Settings',
      icon : 'cogs',
      id   : 'Tab3Page'
    }

  ];
  // @ViewChild(SuperTabs) superTabs : SuperTabs;
  selectedTab = 0;
  onTabSelected($ev){
    if($ev.index === 2){
      console.log("Page 2 is the selected page ");
    }
    else{
      this.selectedTab = $ev.index;
      // this.superTabs.clearBadge(this.pages[$ev.index].id);
    }
  }
  // super tabs
  private auth = null;
  constructor(private store : Storage, private Auth : AuthenticationService){
    this.auth = this.Auth.getAuthUser;
    console.log(this.auth);
  }
  get AuthUser(){
    return this.auth;
  }

}
