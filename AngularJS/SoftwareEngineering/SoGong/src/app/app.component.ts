import { Component } from '@angular/core';
import { LoginmanagementService } from './loginmanagement.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SoGong';
  private LOGIN_STATUS;
  constructor(loginmanager: LoginmanagementService) {
  this.LOGIN_STATUS = loginmanager.get_login_status();
  console.log(this.LOGIN_STATUS);
  }
}
