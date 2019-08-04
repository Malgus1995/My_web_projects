import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
import { TdService } from '../../services/td.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
 todos: Todo[];
  constructor(private todoService: TdService ) {

  }

  ngOnInit() {
   this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }
  deleteTodo(todo:Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }




}
