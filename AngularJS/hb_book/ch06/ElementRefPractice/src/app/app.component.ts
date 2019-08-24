import { Component, ViewChildren, ViewChild, ElementRef, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  logs : number[];
  constructor() {
    this.logs = [];
  }
  leaveKeyLog(evt, num: number) {

    if(evt.KeyCode === 13) {
      this.logs.push(num);
      evt.target.value = '';
    }
  }
  title = 'ElementRefPractice';
  ngAfterViewInit(){
    //ddd
  }

}
