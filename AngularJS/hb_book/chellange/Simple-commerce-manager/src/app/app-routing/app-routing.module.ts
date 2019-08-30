import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {MainDashboardComponent} from '../scm-main/main-dashboard/main-dashboard.component';
import {PageNotFoundComponent} from '../scm-main/page-not-found/page-not-found.component';
import { RouterModule} from '@angular/router';

const routes: Routes = [
  { path: 'total-summary', component: MainDashboardComponent },
  { path: '', redirectTo: 'total-summary', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
  ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
