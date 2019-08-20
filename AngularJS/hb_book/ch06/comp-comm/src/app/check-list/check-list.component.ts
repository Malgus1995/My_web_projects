import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
  baseString:string="check list "
  numbers = ["one", "two", "three", "four"];
  checkedList = []
  checknumstr=0;
  constructor() { }
  addList(number:string) {

    if(this.checkedList.includes((this.baseString + number))){
      this.checkedList.pop(this.checkedList.indexOf((this.baseString + number)));
      this.checknumstr--;
      return ;
    }else {


      this.checkedList.push(this.baseString + number);
      console.log(this.checkedList);
      this.checknumstr++;
    }
  }

  ngOnInit() {
  }

}
