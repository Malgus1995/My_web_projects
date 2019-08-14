import {AfterViewInit, Component, OnInit} from '@angular/core';
import { WelcomeSupportService } from '../welcome-support.service';
import { MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements OnInit, AfterViewInit {

  userName = '';
  welcomeMsg = '';
  private valid = false;
  private static chk_key_wait = 50000;

    ngAfterViewInit(){
      const checkTouchedFn = () => {
        if (this.valid) return ;
        this.snackbar.open('이름을 입력해 주세요','확인',{duration: 3000});
      };
      setTimeout(checkTouchedFn, WelcomeMsgComponent.chk_key_wait);
    }

    onChange() {
    this.valid = this.userName.length > 0 ;
  }

  showWelcomeMsg(){
    this.welcomeMsg = this.SupportService.getWelcomeMsg(this.userName);
  }

  constructor(public SupportService: WelcomeSupportService,private snackbar: MatSnackBar) {

  }

  ngOnInit() {
  }

}
