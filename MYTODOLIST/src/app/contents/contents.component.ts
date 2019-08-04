import { Component, OnInit,Output } from '@angular/core';
import {TdService} from '../services/td.service';
import { Todo } from './Todo';


@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TdService) { }
  ngOnInit() {
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {this.todos.push(todo); });
  }

}
