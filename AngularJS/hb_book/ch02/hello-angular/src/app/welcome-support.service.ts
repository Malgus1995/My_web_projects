import { Injectable } from '@angular/core';

@Injectable({

  providedIn: 'root'
})
export class WelcomeSupportService {
  langCode = 'ko';
  private  welcomeMsg;
  constructor() {
    this.welcomeMsg = {
      'ko': '안녕하세요',
      'cn': 'nihao',
      'jp': '곤니찌와',
      'en': 'Hello'
    };
  }
  getWelcomeMsg(userName: string) {
    const helloMsg = this.welcomeMsg[this.langCode];
    return `${helloMsg}, ${userName}!`;
  }
}
