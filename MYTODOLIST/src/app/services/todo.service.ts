import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(){
    return [
      {id: 1,
        title: 'Todo One',
        completed: false},
      {id: 2,
        title: 'Todo two',
        completed: true},
      {id: 3,
        title: 'Todo Three',
        completed: false}
    ];
  }
}
