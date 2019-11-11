import { Component, OnInit } from '@angular/core';
import {LoginmanagementService } from '../../../loginmanagement.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private login_server ="http://127.0.0.1:5002/login_ask";


  constructor(private httpClient: HttpClient) {
  }

  ask_login(login_info) {
    this.httpClient.post(this.login_server, login_info.value).subscribe(data => {
      if(data['login_status']){
        alert("비밀 번호 확인 혹은 존재하지않는 아이디 입니다.");
      }else {
        if(!data['login_status']) {
          window.location.href= 'http://localhost:4200';
        }
      }
    },error => {
      alert("존재하지않는 아이디 입니다.");
    });
  }


  ngOnInit() {
  }

}
