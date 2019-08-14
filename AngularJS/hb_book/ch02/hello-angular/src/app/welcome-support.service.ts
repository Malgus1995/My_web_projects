import { Injectable } from '@angular/core';
import { LANG_METADATA} from './lang-metadata';
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
    const langData = LANG_METADATA.find(lang => lang.code === this.langCode);
    return `${langData.msg}, ${userName}!`;
  }
}
