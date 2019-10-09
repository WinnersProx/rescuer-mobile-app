import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { DataService } from './datas.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
	private baseUrl:string = 'http://localhost:3000/api/v1/';
	private latitude:number;
	private longitude:number;
  private httpOptions = {
    headears : new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded'
    })
  };
  constructor(private http : HttpClient, private ___datas : DataService, private geolocation : Geolocation) { 
  }

  triggerEAllert({ type }){
  	this.setUserLocation();
  	return this.http.post(`${this.baseUrl}/alerts`, {type, user_location : this.userLocation})
  }
  viewAlerts(){
  	return this.http.get(`${this.baseUrl}/alerts`)
  }
  approveEAllert(alert){
    return this.http.patch(`${this.baseUrl}/alerts/${alert}/acknowledge`,{})
  }
  disApproveEAllert(alert){
    return this.http.patch(`${this.baseUrl}/alerts/${alert}/disapprove`,{})
  }
  setUserLocation(){
    this.geolocation.getCurrentPosition().then(resp => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      this.___datas.toastSError(error.message);
    })
  }

  get userLocation(){
  	return `${this.latitude},${this.longitude}`;
  }

}
