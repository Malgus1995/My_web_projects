import { Component, OnInit } from '@angular/core';
import {CounterServiceService } from '../counter-service.service';
@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css']
})
export class CounterComponentComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  input_ordertext = '숫자를 입력하시오';
  warningMsg = "제발 숫자를 입력해 주세요"
  InputNumber = '';
  constructor(public CService: CounterServiceService) { }
  checkInt(InputNumber) {
    // tslint:disable-next-line:radix
    const res =  parseInt(InputNumber);
    if(!isNaN(res)) {
      this.CService.setNumber(InputNumber);
      return true;
    }
    return false;
  }
  ngOnInit() {
  }

}
