import { Component, OnInit } from '@angular/core';
import {AddurlComponent} from '../../addurl/addurl.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  addstatus = true;
  public head_appTitle = 'Notice'
  public tail_appTitle = 'Observer'
  constructor() { }
  addURL() {

    window.open('addurl/app-addurl', '_blank');
  }
  ngOnInit() {
  }

}
