import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-url-mangement',
  templateUrl: './url-mangement.component.html',
  styleUrls: ['./url-mangement.component.css']
})
export class UrlMangementComponent implements OnInit {

  url_list = []
  agree_auth_info=false;
  exist_loginfo=false;
  url_edit_mode = false;
  change2editMode() {
    this.url_edit_mode = !this.url_edit_mode;
  }
  complete_edit() {
    this.url_edit_mode = !this.url_edit_mode;

  }
  load_url_list() {

    this.httpclient.post('http://127.0.0.1:5002/get_registered_url', 'load_url_list').subscribe(data => {
      console.log(data['url_list']);
      this.url_list = data['url_list'];
      if ((this.url_list['idForAuth'] && this.url_list['pwForAuth'] ) !==null) {
        this.exist_loginfo=true;


      }
    });
  }
  modify_id_pw(modify_id_pw){
    this.agree_auth_info =modify_id_pw;
    this. exist_loginfo = !this.agree_auth_info;

  }
  complete_modify_auth_login_form(){
    this.exist_loginfo = !this.exist_loginfo
    console.log(this.exist_loginfo);
    this.agree_auth_info = !this.agree_auth_info
    console.log(this.agree_auth_info);

  }
  constructor(private httpclient: HttpClient) {
    this.load_url_list();
  }

  ngOnInit() {
  }

}
//get_registered_url
