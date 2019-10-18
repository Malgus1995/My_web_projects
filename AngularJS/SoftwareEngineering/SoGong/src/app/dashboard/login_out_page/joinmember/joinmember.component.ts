import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joinmember',
  templateUrl: './joinmember.component.html',
  styleUrls: ['./joinmember.component.css']
})
export class JoinmemberComponent implements OnInit {
  private user_input_pw;
  private duplicateid_exist:boolean = true;
  private user_input_pw_config;
  private satisfy_memberform :boolean =  false;
  check_satisfy() {
    this.satisfy_memberform = ((this.user_input_pw.length >= 1) && (this.user_input_pw === this.user_input_pw_config) && (!this.duplicateid_exist));
  }


  constructor() { }
  ngOnInit() {
  }

}
