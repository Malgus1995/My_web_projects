import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

const NoticeUploadVal = []
const NoticeDateVal = []
const ELEMENT_DATA = []



@Injectable({
  providedIn: 'root'
})
export class NotieceDataService {
  testServerData;


  async getFlaskPostData() {
    this.httpclient.post('http://127.0.0.1:5002/app-notice', 'ask_req').subscribe(data => {
      this.testServerData = data as JSON;

      while (ELEMENT_DATA.length) { ELEMENT_DATA.pop(); }
      for( var i = 0; i < Object.keys(this.testServerData).length ; i++ ) {
        ELEMENT_DATA.push(this.testServerData[i]);
      }
      this.set_Notice_piece(this.testServerData);
    });
  }
  clear(){
    for(var i=0;i<ELEMENT_DATA.length;i++)
      ELEMENT_DATA.pop();
    for(var i=0;i<NoticeDateVal.length;i++)
      NoticeDateVal.pop();

    for(var i=0;i<NoticeUploadVal.length;i++)
      NoticeUploadVal.pop();
  }

  set_Notice_piece(dictionary_collection) {

    while (NoticeUploadVal.length) { NoticeUploadVal.pop(); }
    while (NoticeDateVal.length) { NoticeDateVal.pop(); }
    let post_counter = 1;
    var predate=dictionary_collection[0]['post_date'];

    for(var i=1; i<dictionary_collection.length; i++){

      if(dictionary_collection[i]['post_date']===predate){
        post_counter+=1;
        continue;
      }
      NoticeDateVal.push(predate);
      NoticeUploadVal.push(post_counter);
      predate = dictionary_collection[i]['post_date'];
      post_counter=1;
    }
  }

  get_NoticeDateVal() {
    return NoticeDateVal;
  }
  get_NoticeUploadVal() {
    return NoticeUploadVal;
  }

  constructor(private httpclient: HttpClient) { }
}
