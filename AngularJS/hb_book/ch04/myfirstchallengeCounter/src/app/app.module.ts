import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponentComponent } from './counter-component/counter-component.component';
import {FormsModule} from "@angular/forms";
import { PlusMinusComponentComponent } from './plus-minus-component/plus-minus-component.component';
import { BtnPreprocessPipe } from './plus-minus-component/btn-preprocess.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponentComponent,
    PlusMinusComponentComponent,
    BtnPreprocessPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
