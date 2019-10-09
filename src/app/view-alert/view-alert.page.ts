import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams, Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DataService } from '../services/datas.service';
import { Users } from '../interfaces/users';
import { AlertsService } from '../services/alerts.service';
import { google } from 'google-maps';

// declare var google;
// declare var google:any;
declare var google:google;

@Component({
  selector: 'app-view-alert',
  templateUrl: './view-alert.page.html',
  styleUrls: ['./view-alert.page.scss'],
})
export class ViewAlertPage implements OnInit {
	private pageTitle:string='Alert Details';
  private emergencyDetails;
  map:any;
  marker:any;
  latitude:any;
  longitude:any;
  timestamp:any;

  constructor(private __data:DataService, 
    private modal : ModalController, 
    private params : NavParams,
    private ___alerts : AlertsService,
    private platform : Platform,
    private geolocation : Geolocation) { 
      let { user_location } = this.params.get('emergency');
      user_location = user_location.split(',');
      this.platform.ready().then(() => {
        var mapOptions = {
          center:{lat:user_location[0],lng:user_location[1]},
          zoom : 7
        };
        this.map = new google.maps.Map(document.querySelector('#map'), mapOptions);
        this.getLocation();
      });
  }

  ngOnInit() {
    this.emergencyDetails = this.params.get('emergency');
    //api-key=AIzaSyBcaQJjNtiHnPGg3ZKJVyKxEE1s6upK8Ro
    //AIzaSyBcaQJjNtiHnPGg3ZKJVyKxEE1s6upK8Ro
    // client id : forward-ace-251302
  }
  ngDoCheck(){
  	this.__data.updateTitle(this.pageTitle);
  }
  async dismissMe(){
    return await this.modal.dismiss();
  }
  approveEmergency(emergency){
    this.___alerts.approveEAllert(emergency).subscribe((res:Users) => {
      this.__data.successToast(res.message);
    }, (error:Users) => {
      this.__data.toastError(error);
    }) 
  }
  disApproveEmergency(emergency){
    this.___alerts.disApproveEAllert(emergency).subscribe((res:Users) => {
      this.__data.successToast(res.message);
    }, (error:Users) => {
      this.__data.toastError(error);
    }) 
  }
  getLocation(){
    var ref = this;
    let watch = this.geolocation.watchPosition();
    watch.subscribe(position => {
      let { user_location } = this.params.get('emergency');
      user_location = user_location.split(',');
      var gps = new google.maps.LatLng(user_location[0], user_location[1]);
      if(ref.marker == null){
        ref.marker = new google.maps.Marker({
          position: gps,
          map: ref.map,
          title: 'user position'
        })
      }
      else{
        ref.marker.setPosition(gps);
      }
      ref.map.panTo(gps);
      ref.latitude = user_location[0].toString();
      ref.longitude = user_location[1].toString();
      ref.timestamp = (new Date(position.timestamp)).toString();
    }, error => {
      this.__data.toastError(error);
    })
  }
}
