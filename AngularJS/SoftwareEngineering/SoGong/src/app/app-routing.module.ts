import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {IndexDashboardComponent} from './dashboard/index-dashboard/index-dashboard.component';
import {PagenotfoundComponent} from './dashboard/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path: '', component: IndexDashboardComponent, pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent}

];
// {path: 'dashboard/notice-dashboard/app-notice-dashboard', component: NoticeDashboardComponent},
// {path: 'dashboard/message-dashboard/app-message-dashboard', component: MessageDashboardComponent},
// //{path: 'app-add-url', component: AddURLComponent },
//{ path: '**', component: PagenotfoundComponent}
//RouterModule.forRoot(routes)

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
