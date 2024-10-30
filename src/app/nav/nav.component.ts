import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  links:any

  constructor(private config:ConfigService){
    this.config.getLinks().subscribe(
      (res:any)=>this.links=res
    )
  }
}
