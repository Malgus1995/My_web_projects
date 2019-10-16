import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { NotieceDataService} from  '../../notiece-data.service';
import { LoginmanagementService } from '../../loginmanagement.service';
@Component({
  selector: 'app-index-dashboard',
  templateUrl: './index-dashboard.component.html',
  styleUrls: ['./index-dashboard.component.css']
})
export class IndexDashboardComponent implements OnInit {
  todayCount=0;
  LineChart = [];
  private Dash_routes: any;
  private Login_status: boolean;

  constructor( ND_service: NotieceDataService, LoginManager : LoginmanagementService) {
    this.Login_status = LoginManager.get_login_status();
    console.log(ND_service.getLengthNotice());
    console.log(ND_service.getNoticeList());
    console.log("login_status: " + this.Login_status);
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
