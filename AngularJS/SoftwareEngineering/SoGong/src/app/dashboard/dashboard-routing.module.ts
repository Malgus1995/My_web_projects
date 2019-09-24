import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MessageComponent} from '../message/message.component';
import {NoticeComponent} from '../notice/notice.component';
import {AddurlComponent} from '../addurl/addurl.component';

const routes: Routes = [
  {path: 'message/app-message', component: MessageComponent},
  {path: 'notice/app-notice', component: NoticeComponent},
  {path: 'addurl/app-addurl', component: AddurlComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
