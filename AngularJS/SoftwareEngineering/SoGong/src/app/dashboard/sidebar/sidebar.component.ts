import { Component, OnInit } from '@angular/core';
import {LoginmanagementService} from '../../loginmanagement.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private login_status;
  constructor(private httpclient:HttpClient) {
    httpclient.post('http://127.0.0.1:5002/get_login_status', 'chk_login').subscribe(data => {
      this.login_status = (data['login_status']);
    });
  }

  ngOnInit() {



  }


}
