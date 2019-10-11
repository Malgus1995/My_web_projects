import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { FormControl, FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-addurl',
  templateUrl: './addurl.component.html',
  styleUrls: ['./addurl.component.css']
})

export class AddurlComponent implements OnInit {
  private add_url_form: FormGroup;
  url__value ="http://127.0.0.1:5002/add_url";
  private url_add_controller: FormControl;


  constructor(private httpClient: HttpClient) {
    this.url_add_controller = new FormControl('');
  }
  cancel_adding() {
    window.close();
  }
  add_URL(ngform) {
   var s = this.httpClient.post(this.url__value,ngform.value).subscribe();
   console.log(ngform.value);
   console.log()
   ngform.ngAfterViewInit();


  }

  ngOnInit() {

  }

}
