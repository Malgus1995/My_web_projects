import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddRemoveService {
  _url= 'http://127.0.0.1:5002/';
  addURL(data) {
    this.http.get(this._url, data).subscribe(
      success => console.log('success!', data),
      error => console.error('error', data)
    );

  }
  removeURL(data){

  }
  constructor(private http: HttpClient) { }
}
