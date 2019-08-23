import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { ViewChildrenComponent} from './view-children/view-children.component';

@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.css']
})
export class TestParentComponent implements OnInit {
  checkListNums: number[];
  @ViewChildren(ViewChildrenComponent) testChild: QueryList<ViewChildrenComponent>;
  constructor() {
    this.checkListNums = [1,2,3];
  }
  checkedAll(){
    this.testChild.map((comp) => comp.isChecked = true);
  }
  uncheckedAll(){
    this.testChild.map((comp) => comp.isChecked = false);
  }
  ngOnInit() {
  }

}
