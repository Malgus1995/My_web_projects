import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {UserService} from './user/user.service';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryUserService} from './in-memory-user.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryUserService, {delay: 500, put204: false})
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
