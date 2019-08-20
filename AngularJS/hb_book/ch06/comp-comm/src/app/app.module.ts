import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckListComponent } from './check-list/check-list.component';
import { ShowChkboxnumComponent } from './check-list/show-chkboxnum/show-chkboxnum.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckListComponent,
    ShowChkboxnumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
