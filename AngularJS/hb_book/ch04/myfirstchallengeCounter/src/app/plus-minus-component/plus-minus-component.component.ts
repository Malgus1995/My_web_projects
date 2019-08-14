import { Component, OnInit } from '@angular/core';
import { CounterServiceService } from '../counter-service.service';

@Component({
  selector: 'app-plus-minus-component',
  templateUrl: './plus-minus-component.component.html',
  styleUrls: ['./plus-minus-component.component.css']
})
export class PlusMinusComponentComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  minus_btn_name = 'MINUS';
  plus_btn_name = 'PLUS';
  InputNumber ;
  btn_names = [this.plus_btn_name, this.minus_btn_name];

  constructor(public Cservice : CounterServiceService) {
  }

  showNumber(){
    this.InputNumber= this.Cservice.getNumber();
  }

  clickedPMbtn(P_M) {
    this.InputNumber= this.Cservice.getNumber();
    if (P_M === this.minus_btn_name) {
      this.Cservice.minusOne(this.InputNumber);
      this.InputNumber = this.Cservice.getNumber();
    } else {
      this.Cservice.plusOne(this.InputNumber);
      this.InputNumber = this.Cservice.getNumber();
    }
  }

  ngOnInit() {
  }

}
