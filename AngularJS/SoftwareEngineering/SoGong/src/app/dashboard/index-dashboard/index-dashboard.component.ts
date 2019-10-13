import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { NotieceDataService} from  '../../notiece-data.service';
@Component({
  selector: 'app-index-dashboard',
  templateUrl: './index-dashboard.component.html',
  styleUrls: ['./index-dashboard.component.css']
})
export class IndexDashboardComponent implements OnInit {
  todayCount=0;
  LineChart = [];
  private Dash_routes: any;

  constructor(ND_service:NotieceDataService) {
    console.log(ND_service.getLengthNotice());
    console.log(ND_service.getNoticeList());
  }




  ngOnInit() {

    // Line chart:
    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: [(new Date().getDay()).toString()],
        datasets: [{
          label: '게시글 갯수',
          data: [9],
          fill:false,
          lineTension:0.2,
          borderColor:"red",
          borderWidth: 1
        }]
      },
      options: {
        title:{
          text:"Line Chart",
          display:true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  }

}
