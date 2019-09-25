import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MessageComponent} from '../message/message.component';
import {NoticeComponent} from '../notice/notice.component';
import {AddurlComponent} from '../addurl/addurl.component';
import {UrlMangementComponent} from '../url-mangement/url-mangement.component';
import {IndexDashboardComponent} from './index-dashboard/index-dashboard.component'
const routes: Routes = [
  {path: 'message/app-message', component: MessageComponent},
  {path: 'notice/app-notice', component: NoticeComponent},
  {path: 'addurl/app-addurl', component: AddurlComponent },
  {path: 'main/app-index', component: IndexDashboardComponent},
  {path: 'addurl/app-url-mangement', component: UrlMangementComponent },


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
