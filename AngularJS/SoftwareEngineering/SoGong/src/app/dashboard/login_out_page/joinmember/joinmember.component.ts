import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-joinmember',
  templateUrl: './joinmember.component.html',
  styleUrls: ['./joinmember.component.css']
})
export class JoinmemberComponent implements OnInit {
  private http;
  private duplicateid_exist:boolean = true;
  private user_input_pw_config;
  private satisfy_memberform :boolean =  false;
  private noduplicate =false;
  private base_url= "http://127.0.0.1:5002";
  check_duplcated_id(userid){
    let duplicated_url = this.base_url+"/check_duplicate_id";
    this.http.post(duplicated_url, userid).subscribe(data =>{
      this.noduplicate = data['duplicate_statue'];
      console.log(data)
      if(!this.noduplicate)
        alert("중복된 아이디 입니다.");
      else
        alert("사용 가능합니다.")
    });
  }

  add_join_request(username,userid,passwd,passwdconfig) {
    let config = this.noduplicate&&(passwd.value === passwdconfig.value) && ((passwd.value.length > 0) && (passwdconfig.value.length > 0)&& (username.value.length>0)&& (userid.value.length>0));
    if(!config){
      alert("패스워드 일치여부 및 아이디 중복 여부 빈 필드를 전부 채워주세요");
    }else{
      let user_dic = {};
      let req_url = this.base_url+ "/join_member";
      user_dic['username'] = username.value;
      user_dic['userid'] = userid.value;
      user_dic['passwd'] = passwd.value;
      user_dic['passwdconfig'] = passwdconfig.value;
      this.http.post(req_url,user_dic).subscribe(data =>{
        console.log(data);
      });

      window.location.href ='http://localhost:4200/';



    }
  }


  constructor(httpclient:HttpClient) {
    this.http = httpclient;
  }
  ngOnInit() {
  }

}
