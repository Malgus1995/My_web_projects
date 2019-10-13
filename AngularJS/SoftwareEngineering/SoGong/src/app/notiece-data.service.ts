import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotieceDataService {
  private NoticeList = []


  setOption(num, url_source, authname, date, href) {
    let temp_NoticeData = {};
    temp_NoticeData["primary_num"]=num;
    temp_NoticeData["url_source"]=url_source;
    temp_NoticeData["auth_name"]=authname;
    temp_NoticeData["post_date"]=date;
    temp_NoticeData["a_src"]=href;
    this.NoticeList.push(temp_NoticeData);
  }

  getLengthNotice(){
    return this.NoticeList.length;
  }
  getNoticeList(){
    return this.NoticeList;
  }



  constructor() { }
}
