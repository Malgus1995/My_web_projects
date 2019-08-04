import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { TdService } from '../../../services/td.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
 @Input() tditem: Todo;
 @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  constructor(private todoService: TdService) { }

  ngOnInit() {
  }
  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.tditem.completed
    }
    return classes;
  }
  onToggle( tditem ) {
    tditem.completed = !tditem.completed;
    this.todoService.toggleCompleted(tditem).subscribe(tditem => console.log(tditem));

  }

  onDelete( tditem ) {
    this.deleteTodo.emit(tditem);

  }

}
