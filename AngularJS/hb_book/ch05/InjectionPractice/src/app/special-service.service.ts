import {Inject, Injectable} from '@angular/core';
import {DF_TOKEN} from './app.tokens';
import {DateForm} from './date-form.enum';

@Injectable({
  providedIn: 'root'
})


export class SpecialServiceService {
  dateform: DateForm;

  constructor(@Inject(DF_TOKEN)dateform: DateForm) {
    this.dateform = dateform;
  }
  setHour(DateObj: any) {
    const res = DateObj.getHours();
    console.log(res);
    this.isDISUCCESS_hour(DateForm.HOURS);

  }

  setMINI(DateObj: any) {
    const res = DateObj.getMinutes();
    console.log(res);
  }
  isDISUCCESS_hour(dform: DateForm) {
    if(DateForm.HOURS=== dform) {
      console.log("success");
    }

  }

}
