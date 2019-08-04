import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TdService {

  constructor() { }

  getTodos() {
    return [
      { id: 1,
        title : 'sibal',
        completed: true
      },
      { id: 3,
        title : 'sibal',
        completed: false
      },
      { id: 2,
        title : 'sibal',
        completed: false
      }];
  }
}
