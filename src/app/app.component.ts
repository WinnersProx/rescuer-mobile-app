import { Component, NgZone } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { DataService } from './services/datas.service';
import { TabsService } from './services/tabs.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls : ['app.component.scss']
})
export class AppComponent {

  private auth;
  private pageTitle : string = '...';
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private Auth: AuthenticationService,
    private route: Router,
    private store : Storage,
    private menu : MenuController,
    private zone : NgZone,
    private ___data : DataService,
    private ___tabs : TabsService
  ) {
  
    this.initializeApp();
    this.___data.currentTitle.subscribe(title => {
      this.pageTitle = title
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.auth = this.Auth.getAuthUser().then(authUser => {
        this.auth = authUser;
        return authUser;
      });
    });

  }
  get authUser(){
    return this.auth;
  }
  openMenu(){
    this.menu.enable(true, 'side');
    this.menu.open('side');
  }
  closeMenu(){
    this.menu.close('side');
  }
}
