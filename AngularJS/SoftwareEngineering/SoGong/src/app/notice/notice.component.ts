import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  testServerData: JSON;
  constructor(private httpclient: HttpClient) { }

  getFlaskServerData() {
    this.httpclient.get('http://127.0.0.1:5002/app-notice').subscribe(data => {
      this.testServerData = data as JSON;
      console.log(this.testServerData);
    });
  }
  ngOnInit() {
  }

}
