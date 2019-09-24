import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NoticeRoutingModule} from './notice-routing.module';
import {NoticeComponent} from './notice.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [NoticeComponent],
  imports: [
    CommonModule,
    NoticeRoutingModule,
    HttpClientModule
  ]
})
export class NoticeModule { }
