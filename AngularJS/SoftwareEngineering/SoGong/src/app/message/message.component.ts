import {Component, OnInit, ViewChild} from '@angular/core';

import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  email_list= [];

  addNewEmail(){
    let temp_form = {
      edit_mode: false};
    this.email_list.push(temp_form);
  }
  deleteItem(item){
    console.log(item.pop());
  }
  change_edit_mode2_register_mode(item) {
    item['edit_mode']=true;
  }
  complete_email_write(item,input_area) {
    item['type'] = 'email';
    item['email'] = input_area.value;
    item['edit_mode']=false;
    var email_json_str = JSON.stringify(item);

    this.httpclient.post('http://127.0.0.1:5002/add_email_list', email_json_str).subscribe(data =>{
      console.log(data);
    });
  }

  constructor(private httpclient: HttpClient) {
  }

  ngOnInit() {

  }
}


/*
  getFlaskServerData() {
    this.httpclient.post('http://127.0.0.1:5002/app-notice', 'ask_req').subscribe(data => {
      this.testServerData = data as JSON;

      while (ELEMENT_DATA.length) { ELEMENT_DATA.pop(); }


      for( var i = 0; i < Object.keys(this.testServerData).length ; i++ ) {
        ELEMENT_DATA.push(this.testServerData[i]);
      }
      this.dataSource.paginator = this.paginator;
    });

  }
  */
