import { Component, OnInit } from '@angular/core';
import {NotieceDataService } from '../../notiece-data.service';
import {HttpClient} from '@angular/common/http';
import {LoginmanagementService} from '../../loginmanagement.service';
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
  login_exist = true;


  constructor(private httpclient: HttpClient, private notices:NotieceDataService, private ls: LoginmanagementService) {

    httpclient.post('http://127.0.0.1:5002/get_registered_url', 'load_url_list').subscribe(data => {
        console.log(data);
        this.url_exist = !(0 < (data['url_list']).length);
      });
    httpclient.post('http://127.0.0.1:5002/get_registered_url', 'load_url_list').subscribe(data => {
      console.log(data);
    });


    httpclient.post('http://127.0.0.1:5002/get_login_status', 'chk_login').subscribe(data => {
      this.login_exist = (data['login_status']);
      console.log('loginstatus'+data['login_status']);
    });
  }

  req_logout() {
    this.httpclient.post('http://127.0.0.1:5002/logout_request', 'logout_request').subscribe(data => {
      this.login_exist = !(data['login_status']);
      this.notices.clear();
    });
    console.log(this.login_exist);
  }

  addURL() {
    window.open('addurl/app-addurl', '_blank');
  }
  ngOnInit() {
  }

}
