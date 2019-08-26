import {Component, OnChanges, OnDestroy} from '@angular/core';
import {NgControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentModelData: any = 'parent';
  title = 'modelDualDirectBindingPr';
  constructor() {
    console.log(this.parentModelData);
  }

}
