import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private initialTitle = new BehaviorSubject('......');
    currentTitle = this.initialTitle.asObservable();
    constructor(){}
    updateTitle(title : string){
        this.initialTitle.next(title)
    }
}