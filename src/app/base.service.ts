import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="https://jsonplaceholder.typicode.com/albums/"
  
  constructor(private http:HttpClient) { }

  getAlbums(){
    return this.http.get(this.url)
  }
}
