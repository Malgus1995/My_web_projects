import { Component, OnInit, Input } from '@angular/core';
import {ListServiceService} from '../../list-service.service';

@Component({
  selector: 'app-show-chkboxnum',
  templateUrl: './show-chkboxnum.component.html',
  styleUrls: ['./show-chkboxnum.component.css']
})
export class ShowChkboxnumComponent implements OnInit {
  @Input() private checkedlist
  @Input() checknumstr
  constructor() {

  }

  ngOnInit() {
  }

}
