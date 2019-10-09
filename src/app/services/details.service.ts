import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
	private baseUrl:string = 'http://localhost:3000/api/v1/';
  constructor(private http : HttpClient) { }

  getFeedbacks(){
  	return this.http.get(`${this.baseUrl}/feedbacks`)
  }

  newFeedback(message){
  	return this.http.post(`${this.baseUrl}/feedbacks`, { message })
  }
}
