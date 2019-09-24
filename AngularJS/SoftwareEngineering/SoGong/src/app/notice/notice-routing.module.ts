import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NoticeComponent} from './notice.component';

const routes: Routes = [{
    path: '',
    component: NoticeComponent
}];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NoticeRoutingModule { }
