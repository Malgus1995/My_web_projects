import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.css']
})
export class ViewChildrenComponent implements OnInit {
  isChecked: boolean;

  constructor() {
    this.isChecked= false;
  }

  ngOnInit() {
  }

}
