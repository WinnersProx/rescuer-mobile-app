import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  constructor(private Auth : AuthenticationService){

  }
  ngOnInit(){
    
  }
  logoutUser(){
    this.Auth.logoutUser();
  }
}
