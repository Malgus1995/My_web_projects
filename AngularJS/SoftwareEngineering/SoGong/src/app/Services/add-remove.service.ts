import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddRemoveService {
  _url= 'http://127.0.0.1:5002/ ';
  addURL_POST(data) {
    this.http.post(this._url, data).subscribe(
      success => console.log('success!', data),
      error => console.error('error', data)
    );

  }
  constructor(private http: HttpClient) { }
}
