import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  displayedColumns: string[] = ['post_num', 'title', 'author', 'post_date'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  testServerData: JSON;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private httpclient: HttpClient) {
    this.getFlaskServerData();
  }

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
  ngOnInit() {

  }
}

export interface PeriodicElement {
  title: string;
  post_num: number;
  author: string;
  post_date: string;
  post_url: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
