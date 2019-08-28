import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyapiGateWayService {
  Headers:HttpHeaders;
  constructor(private http :  HttpClient) {
    this.Headers= new HttpHeaders();
    this.Headers.set('ss', 'angular-is-awesome');

  }
  get(url: string){
    return this.http.get(url);
  }
  post(url: string,data: any){
    return this.http.post(url, data);
  }
  put(url: string,data: any){
    return this.http.put(url, data);
  }
  delete(url: string){
    return this.http.delete(url);
  }
}
