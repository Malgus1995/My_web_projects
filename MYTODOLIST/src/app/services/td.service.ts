import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TdService {
  todosUrl: '';
  constructor(private http:HttpClient) { }

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
