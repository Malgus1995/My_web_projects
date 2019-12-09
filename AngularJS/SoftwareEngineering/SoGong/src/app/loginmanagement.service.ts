import { Injectable } from '@angular/core';



const login_s = [false];
@Injectable({
  providedIn: 'root'
})


export class LoginmanagementService {


  set_login_status(login_res) {
     if(login_res) {
       login_s.pop();
       login_s.push(login_res);
     }
  }
  get_login_status(){
     return login_s[0];
  }



  constructor() { }
}
