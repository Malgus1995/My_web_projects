import { Injectable } from '@angular/core';



const login_id_pw = [];

@Injectable({
  providedIn: 'root'
})
export class LoginmanagementService {
  private login: boolean = false;

  login_verified(logininfo) {
    login_id_pw.push(logininfo);
  }

  check_login(asking) {
    this.login= asking;
  }
  get_length(){
    return login_id_pw.length;
  }
  get_login_status() {
    return !(login_id_pw.length > 0);
  }


  constructor() { }
}
