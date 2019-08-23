import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DateForm} from './date-form.enum';
import { SpecialServiceService} from './special-service.service';
import { AppComponent } from './app.component';
import { GetNowtimeComponent } from './get-nowtime/get-nowtime.component';
import { DF_TOKEN } from './app.tokens';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    GetNowtimeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SpecialServiceService, {provide: DF_TOKEN, useValue: DateForm}],
  bootstrap: [AppComponent]
})
export class AppModule { }
