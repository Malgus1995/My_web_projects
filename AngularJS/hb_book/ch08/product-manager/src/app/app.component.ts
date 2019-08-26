import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms'
import { Observable} from 'rxjs';
import { filter, map} from 'rxjs/operators';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  product: any;
  errors: any[] = [];
  title = 'product-manager';
  errorCodes = ['required', 'pattern'];
  @ViewChild('proForm') prodForm: NgForm;

  constructor() {
    this.initProduct();
  }
  ngAfterViewInit() {
    this.prodForm.statusChanges.filter(s => s ==='INVALID').switchMap(() => {
      this.errors = [];
      return Observable.from(Object.keys(this.prodForm.controls));
    })
      .subscribe((controlName) => {
        this.errorCodes
          .filter(code => {
            const errorMsg = this.prodForm.getError(code, [controlName]);
            this.errorCodes.push({controlName, code, errorMsg})
          });
      });
    this.prodForm.statusChanges.filter(s => s === 'VALID')
      .subscribe( () => this.errors = []);
  }

  initProduct() {
    this.product = {name: '', price: '', qty: ''};
  }
  onSubmit() {
    alert('submit');
  }
  onReset() {
    this.initProduct();
  }


}
