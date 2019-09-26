import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import {MessageModule} from './message/message.module';
import {NoticeModule} from './notice/notice.module';
import { AddurlComponent } from './addurl/addurl.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UrlMangementComponent } from './url-mangement/url-mangement.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddurlComponent,
    UrlMangementComponent,

  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule,
    RouterModule,
    NoticeModule,
    MessageModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
