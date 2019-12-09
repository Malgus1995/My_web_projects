import {Component, Host, Inject, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import { HttpClient} from '@angular/common/http';
import { NotieceDataService } from  '../../notiece-data.service';
import { LoginmanagementService } from '../../loginmanagement.service';
import { NoticeComponent } from '../../notice/notice.component';
@Component({
  selector: 'app-index-dashboard',
  templateUrl: './index-dashboard.component.html',
  styleUrls: ['./index-dashboard.component.css']
})
export class IndexDashboardComponent implements OnInit {
  todayCount = 0;
  noticegetter: NotieceDataService;
  LineChart = [];
  private Dash_routes: any;
  private Login_status: boolean;
  private label_s = [];
  private data_s = [];

  constructor(@Host()  noticeservice: NotieceDataService) {
    this.noticegetter = noticeservice;
    //this.noticegetter.getFlaskPostData();
    this.data_s = this.noticegetter.get_NoticeUploadVal();
    this.label_s = this.noticegetter.get_NoticeDateVal();

  }
  addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart.update();
  }

    ngOnInit() {
    this.noticegetter.getFlaskPostData();
    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: '게시글 갯수',
          data: [],
          fill: false,
          lineTension: 0.2,
          borderColor: "red",
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Line Chart",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
       for (var i = 0; i < this.data_s.length; i++) {
         this.addData(this.LineChart, this.label_s[i], this.data_s[i]);
       }
    console.log(this.data_s);
  }
}


