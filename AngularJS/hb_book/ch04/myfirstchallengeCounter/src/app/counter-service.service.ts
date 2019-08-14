import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
  service_num ;
  // tslint:disable-next-line:variable-name
  btn_info = [
    {
      type: '+',
      name: 'PLUS'
    },
    {
      type: '-',
      name: 'MINUS'
    }
];
  get_btn_infos() {
    return this.btn_info;
  }

  plusOne(InputNumber) {

    this.service_num  = parseInt(InputNumber);
    this.service_num = (this.service_num + 1);
    console.log(this.service_num);

  }

  minusOne(InputNumber){

    this.service_num  = parseInt(InputNumber);
    this.service_num = (this.service_num - 1);
    console.log(this.service_num);

  }
  setNumber(InputNumber){
    this.service_num = parseInt(InputNumber);
  }
  getNumber() {
    return this.service_num;
  }

  constructor() {
  }
}
