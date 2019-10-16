import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginmanagementService {
  private login: boolean = false;


  ask_valid_req_login() {
    return true;
  }
  ask_valid_req_logout(){
    return false;
  }

  login_req(asking) {
    console.log("asking: "+ asking);
    if ( asking) {
      this.login = this.ask_valid_req_login();
    } else {
      this.login = this.ask_valid_req_logout();
    }
  }

  logout_req() {
    this.login = this.ask_valid_req_logout();
  }

  get_login_status() {
    return this.login;
  }


  constructor() { }
}
