import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  menuItems:any=new BehaviorSubject([])

  constructor(private http:HttpClient) {
      this.http.get("assets/lang_hu.json").subscribe(
        (res:any)=> this.menuItems.next(res['menuItems'])
      )
   }

  public getLinks(){
    return this.menuItems
  }
}
