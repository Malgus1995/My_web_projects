import {Component, OnInit, ViewChild} from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mydata: any;
  @ViewChild('myModel') myNgModel: NgModel;
  validResult: boolean;

  title = 'ngFormTest';
  ngOnInit() {
    this.myNgModel.valueChanges.subscribe(v => console.log(`value ${v}`));
    this.myNgModel.statusChanges.subscribe(s => console.log(`statis ${s}`));
  }
  checkValid() {
    this.validResult = this.myNgModel.valid;
  }
}
