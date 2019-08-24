import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class DataService {
    private initialTitle = new BehaviorSubject('......');
    currentTitle = this.initialTitle.asObservable();
    constructor(private __http : HttpClient){}
    updateTitle(title : string){
        this.initialTitle.next(title)
    }
    getGuides(){
    	let guides = this.__http.get('../../assets/datas/emergencies.json');
    	return guides;
    }
}