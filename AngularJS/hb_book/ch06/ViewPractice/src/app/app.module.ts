import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { TestParentComponent } from './test-parent/test-parent.component';
import { ViewChildrenComponent } from './test-parent/view-children/view-children.component';

@NgModule({
  declarations: [
    AppComponent,
    TestParentComponent,
    ViewChildrenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
