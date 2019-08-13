import { Component, OnInit } from '@angular/core';
import { WelcomeSupportService } from '../welcome-support.service';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements OnInit {

  userName = '';
  private valid = false;
  private static CHk_KEYUP_WAIT_SEC = 50000;

    ngAfterViewInit(){
      const checkTouchedFn = () => {
        if (this.valid) return ;
        alert('이름을 입력하세여') ;
      };
      setTimeout(checkTouchedFn, WelcomeMsgComponent.CHk_KEYUP_WAIT_SEC);
    }

    onChange() {
    this.valid = this.userName.length > 0 ;
  }

  showWelcomeMsg(){
    this.welcomeMsg = this.SupportService.getWelcomeMsg(this.userName);
  }

  constructor(public SupportService: WelcomeSupportService) {

  }

  ngOnInit() {
  }

}
