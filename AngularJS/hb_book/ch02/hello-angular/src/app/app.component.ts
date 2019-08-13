import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'hello-angular';
  userName = '';
  private valid = false;
  private static CHk_KEYUP_WAIT_SEC = 5000;

  ngAfterViewInit(){
    const checkTouchedFn = () => {
      if(this.valid) return ;
      alert('이름을 입력하세여') ;
    };
    setTimeout(checkTouchedFn, AppComponent.CHk_KEYUP_WAIT_SEC);
  }

  onKeyUp(name) {
    this.valid = name.length > 0 ;
  }

  setName(name){
    this.userName = name;
  }

}
