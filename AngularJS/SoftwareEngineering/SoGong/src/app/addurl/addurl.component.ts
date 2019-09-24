import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addurl',
  templateUrl: './addurl.component.html',
  styleUrls: ['./addurl.component.css']
})

export class AddurlComponent implements OnInit {

  constructor() {
  }
  cancel_adding() {
    window.close();
  }

  ngOnInit() {
  }

}
