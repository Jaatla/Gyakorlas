import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  albums:any=[]
  columns:any

  constructor(
      private base:BaseService, 
      private config:ConfigService)
      {
    this.base.getAlbums().subscribe(
      (res)=> this.albums=res
    )
    this.config.getLinks().subscribe(
      (res:any)=>this.columns=res["columns"]
    )
  }



}
