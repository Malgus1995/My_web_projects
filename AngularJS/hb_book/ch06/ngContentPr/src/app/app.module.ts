import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestParentComponent } from './test-parent/test-parent.component';
import { ChildComponent } from './test-parent/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    TestParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
