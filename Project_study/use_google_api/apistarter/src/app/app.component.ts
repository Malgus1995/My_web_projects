import { Component, ViewChild } from '@angular/core';

import { FullCalendarComponent } from '@fullcalendar/angular';

import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calendarEvents = [
    { title: 'event 1', date: '2019-08-01' }
  ];

  calendarPlugins = [dayGridPlugin];

  addEvent() {
    this.calendarEvents = this.calendarEvents.concat({ // creates a new array!
     title: 'event 2', date: '2019-04-02'
  });
  }

  modifyTitle(eventIndex, newTitle) {
    let calendarEvents = this.calendarEvents.slice(); // a clone
    let singleEvent = Object.assign({}, calendarEvents[eventIndex]); // a clone
    singleEvent.title = newTitle;
    calendarEvents[eventIndex] = singleEvent;
    this.calendarEvents = calendarEvents; // reassign the array
  }

}
