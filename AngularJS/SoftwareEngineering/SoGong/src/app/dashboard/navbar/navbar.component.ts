import { Component, OnInit } from '@angular/core';
import {AddurlComponent} from '../../addurl/addurl.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  addstatus = true;
  head_appTitle = 'Notice'
  tail_appTitle = 'Observer'
  url_exist=true;
  constructor(httpclient: HttpClient) {
    httpclient.post('http://127.0.0.1:5002/get_registered_url', 'load_url_list').subscribe(data => {
      console.log(data);
      this.url_exist = !(0 < (data['url_list']).length);
    });

  }
  addURL() {

    window.open('addurl/app-addurl', '_blank');
  }
  ngOnInit() {
  }

}
