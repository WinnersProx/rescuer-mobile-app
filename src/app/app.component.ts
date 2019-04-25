import { Component, NgZone } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls : ['app.component.scss']
})
export class AppComponent {
  private auth;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private Auth: AuthenticationService,
    private route: Router,
    private store : Storage,
    private menu : MenuController,
    private zone : NgZone
  ) {
    this.initializeApp();
    this.auth = {
      "id": 2,
      "email": "bihames4vainqueur@gmail.com",
      "created": "2018-03-07T09:55:57+00:00",
      "modified": "2018-03-13T00:17:47+00:00",
      "about": "nothing special!",
      "phone": "+243991264608",
      "avatar": "avatars\/2\/4a6f111232de9b99f69fbb8d8ab45b75.jpg",
      "name": "arsene",
      "slug": "arsene",
      "user_dob": null,
      "user_sex": ""
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //set the token
      this.store.get('__accessToken').then(AuthToken => {
        this.Auth.setToken(AuthToken);
      })
      this.store.get('authUser').then(user => {
          this.Auth.setAuthUser(user);
      })
    });

  }
  get AuthUser(){
    return this.auth;
  }
  setAuthUser(user){
    this.auth = user;
  }
  openMenu(){
    this.menu.enable(true, 'side');
    this.menu.open('side');
  }
  closeMenu(){
    this.menu.close('side');
  }
}
