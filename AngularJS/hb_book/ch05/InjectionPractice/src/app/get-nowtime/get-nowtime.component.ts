import { Component, OnInit, Host, Optional } from '@angular/core';
import { DF_TOKEN} from '../app.tokens';
import { SpecialServiceService } from '../special-service.service';
import { DateForm } from '../date-form.enum';

@Component({
  selector: 'app-get-nowtime',
  templateUrl: './get-nowtime.component.html',
  styleUrls: ['./get-nowtime.component.css'],
  providers:[SpecialServiceService]
})
export class GetNowtimeComponent implements OnInit {
  timechecker: SpecialServiceService;
  constructor(
    @Host()  mySpecialService: SpecialServiceService
  ) {
    this.timechecker = mySpecialService;

  }

  get_nowDate() {
    this.timechecker.setMINI(new Date());
    this.timechecker.setHour(new Date());
  }

  ngOnInit() {
  }

}
