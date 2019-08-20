import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myObj = {'test-class' : true,'test':true};
  member = {
    name: 'Luke',
    email: 'suj'
  }
  status = false;
  isShow() {
    return !this.status;
  }

  title = 'NGIFTEST';
}
