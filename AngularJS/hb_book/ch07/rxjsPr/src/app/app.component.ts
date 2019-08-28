import { Component } from '@angular/core';
import {observable, Observable} from 'rxjs';
import {throttleTime} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Headers:HttpHeaders;
  title = 'rxjsPr';

  constructor() {
    this.Headers= new HttpHeaders();
    this.Headers.set('ss', 'angular-is-awesodde');

  }
}

