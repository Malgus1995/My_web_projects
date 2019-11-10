import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URLDataService} from '../urldata.service';
@Component({
  selector: 'app-url-mangement',
  templateUrl: './url-mangement.component.html',
  styleUrls: ['./url-mangement.component.css']
})
export class UrlMangementComponent implements OnInit {

  url_list = []
  agree_auth_info=false;
  exist_loginfo=false;
  conform_loginfo=true;
  urlservice:URLDataService;
  url_edit_mode = false;
  change2editMode() {
    this.url_edit_mode = !this.url_edit_mode;
  }
  complete_edit(item) {

    this.url_list[0]['requestedurl'] = item.value;
    var url_json_str = JSON.stringify(this.url_list[0]);
    console.log(url_json_str);
    this.httpclient.post('http://127.0.0.1:5002/modify_url', url_json_str).subscribe(data =>{
      console.log(data);
    });
    this.url_edit_mode = !this.url_edit_mode;

  }
  load_url_list() {

    this.httpclient.post('http://127.0.0.1:5002/get_registered_url', 'load_url_list').subscribe(data => {
      console.log(data['url_list']);
      this.url_list = data['url_list'];
      if(this.url_list.length!==0)
        if ((this.url_list[0]['idForAuth'] !==undefined&& this.url_list[0]['pwForAuth']!==undefined ) ) {
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


  deleteItem(item){
    console.log(item);
    let deleted_item = (item.pop());
    this.httpclient.post('http://127.0.0.1:5002/del_url_list', deleted_item).subscribe(data =>{
      console.log(data);
    });

  }
  constructor(private httpclient: HttpClient,urlservice: URLDataService) {
    this.urlservice = urlservice;
    this.load_url_list();
  }

  ngOnInit() {
  }

}
//get_registered_url
