import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LoginmanagementService} from '../loginmanagement.service';
import { FormControl, FormBuilder, FormGroup, Validators  } from '@angular/forms';
@Component({
  selector: 'app-addurl',
  templateUrl: './addurl.component.html',
  styleUrls: ['./addurl.component.css']
})

export class AddurlComponent implements OnInit {
  url__value ="http://127.0.0.1:5002/add_url";

  private url_add_controller: FormControl;
  private agree_auth_info:boolean = false;

  constructor(private httpClient: HttpClient, private loginmanager: LoginmanagementService) {

    this.url_add_controller = new FormControl('');
    console.log(loginmanager.get_login_status());
  }
  cancel_adding() {
    window.close();
  }
  add_id_pw(chkbox){
    chkbox.checked = !chkbox.checked;

    this.agree_auth_info = chkbox.checked;
  }
  add_id_pw_chkbox(event){
    event.preventDefault();
  }
  add_URL(ngform) {
    let url_info = JSON.stringify(ngform.value);
    var s = this.httpClient.post(this.url__value, url_info).subscribe(res => { console.log(res); return res;});
    if(ngform.submitted) {
      alert("업로드 되었습니다.");
      window.close();
   }

  }

  ngOnInit() {

  }

}
