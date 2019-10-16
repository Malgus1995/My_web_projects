import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {IndexDashboardComponent} from './index-dashboard/index-dashboard.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FootbarComponent} from './footbar/footbar.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {LoginComponent} from './login_out_page/login/login.component';
import {JoinmemberComponent} from './login_out_page/joinmember/joinmember.component';
import {FormsModule} from '@angular/forms';

const CORE_COMPONENTS = [NavbarComponent, SidebarComponent, FootbarComponent,
  IndexDashboardComponent, PagenotfoundComponent, LoginComponent, JoinmemberComponent];

@NgModule({
  declarations: CORE_COMPONENTS,
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    FormsModule
  ],
  exports: CORE_COMPONENTS
})
export class DashboardModule { }
