import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/datas.service';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['../app.component.scss', './view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  private pageTitle:string='Profile Details';
  private user;
  constructor(private __data: DataService, 
    private store : Storage, 
    private __auth : AuthenticationService,
    private router : Router
    ) { }

  ngOnInit() {
    this.user = this.__auth.getAuthUser().then(auth => {
      this.user = auth;
      return auth;
    });
  }
  ngDoCheck(){
  	this.__data.updateTitle(this.pageTitle);
  }
  logoutUser(){
    this.store.remove('auth').then( () => {
      this.__data.successToast('Logged out successfully!');
      this.router.navigate(['/login']);
    });
  }
  get authUser(){
    return this.user;
  }
}
