import {Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NotieceDataService} from  '../notiece-data.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})



export class NoticeComponent implements OnInit {

  testServerData: JSON;
  private ND_service: NotieceDataService;

  constructor(private httpclient: HttpClient, ND_service :NotieceDataService ) {

    this.ND_service = ND_service;
  }

  getFlaskServerData() {
    //this.httpclient.get('http://127.0.0.1:5002/app-notice').subscribe(data => {
     // this.testServerData = data as JSON;
     // console.log(this.testServerData);});
    this.ND_service.setOption(1,'url_test','test_name',(new Date()).getDay(),'#');
    this.ND_service.setOption(2,'url_test2','test_name2',(new Date()).getDay(),'#2');
    console.log(this.ND_service.getLengthNotice());
  }
  ngOnInit() {

  }
}

