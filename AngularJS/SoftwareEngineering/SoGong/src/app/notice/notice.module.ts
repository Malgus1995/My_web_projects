import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NoticeRoutingModule} from './notice-routing.module';
import {NoticeComponent} from './notice.component';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from "@angular/material";
import { MatPaginatorModule } from '@angular/material';
import { ConfirmNoticeComponent } from './confirm-notice/confirm-notice.component';

@NgModule({
  declarations: [NoticeComponent, ConfirmNoticeComponent],
  imports: [
    CommonModule,
    NoticeRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class NoticeModule { }
