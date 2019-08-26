import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent {
  prev:any;
  constructor() {
    this.prev = this.myData;
    this.myData ='child';

    if(this.prev !==this.myData) {
      console.log('data change');
      this.myDataChange.emit(this.myData);
    }
  }
  @Input() myData: any;
  @Output() myDataChange: EventEmitter<any> = new EventEmitter();

  IsChange() {

  }

}
