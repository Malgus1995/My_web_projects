import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
 todos: Todo[];
  constructor() { }

  ngOnInit() {
    this.todos ;
  }




}
