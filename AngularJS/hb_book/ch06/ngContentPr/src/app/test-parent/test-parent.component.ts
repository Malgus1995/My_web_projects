import { Component, OnInit, ContentChild, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.css']
})
export class TestParentComponent implements OnInit {
  @ContentChild(ChildComponent) childCmp: ChildComponent;
  @ViewChild(ChildComponent) childCmp2: ChildComponent;

  constructor() { }

  ngOnInit() {
  }

}
