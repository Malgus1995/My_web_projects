import { Component, OnInit } from '@angular/core';
import { AddRemoveService } from '../Services/add-remove.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-addurl',
  templateUrl: './addurl.component.html',
  styleUrls: ['./addurl.component.css']
})

export class AddurlComponent implements OnInit {
  url__value ;

  constructor(private addrmurl: AddRemoveService) {}
  cancel_adding() {
    window.close();
  }
  onClickSubmit(data) {
    this.url__value= data;
    console.log(this.url__value.requestedurl);
    this.addrmurl.addURL_POST(this.url__value);

  }

  ngOnInit() {
  }

}
