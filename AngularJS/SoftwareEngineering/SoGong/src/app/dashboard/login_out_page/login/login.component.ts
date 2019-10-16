import { Component, OnInit } from '@angular/core';
import {LoginmanagementService } from '../../../loginmanagement.service';
import { HttpClient} from '@angular/common/http';
import { FormControl, FormBuilder, FormGroup, Validators  } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private asking:boolean;
  private login_server ="http://127.0.0.1:5002/login_ask";

  constructor(private httpClient: HttpClient,private loginManager: LoginmanagementService) {
  }
  ask_login(login_value) {
    this.asking =false;
    this.httpClient.post(this.login_server, login_value.value).subscribe(res => {
      this.loginManager.login_req(res['login_status'] === "true");
      console.log(this.loginManager.get_login_status());
       return res; });
    console.log(this.loginManager.get_login_status());
  }


  ngOnInit() {
  }

}
