import { Component, OnInit } from '@angular/core';
import {concat} from 'rxjs';

@Component({
  selector: 'app-footbar',
  templateUrl: './footbar.component.html',
  styleUrls: ['./footbar.component.css']
})
export class FootbarComponent implements OnInit {
  teams:string[] = ['LukeSungukJung', 'GibyoomKim', 'YeawonKim'];
  lastName = this.teams[2];
  counter = 0;
  constructor() { }
  printCreators(name: string) {
    if (this.lastName === name) {
      return name;
    } else {
      return name.concat(', ');
    }
  }

  ngOnInit() {
  }

}
