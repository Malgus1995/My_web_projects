import { Component, OnInit } from '@angular/core';
import {AddurlComponent} from '../../addurl/addurl.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  addstatus = true;
  head_appTitle = 'Notice'
  tail_appTitle = 'Observer'
  constructor() { }
  addURL() {

    window.open('addurl/app-addurl', '_blank');
  }
  ngOnInit() {
  }

}
