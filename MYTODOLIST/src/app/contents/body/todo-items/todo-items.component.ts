import { Component, OnInit,Input } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
 @Input() tditem: Todo;

  constructor() { }

  ngOnInit() {
  }
  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.tditem.completed
    }
    return classes;
  }
  onToggle(tditem) {
    tditem.completed = !tditem.completed;

  }
  onDelete(tditem){

  }

}
