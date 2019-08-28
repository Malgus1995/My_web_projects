import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FootbarComponent } from '../footbar/footbar.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const CORE_COMPONENTS = [ NavbarComponent,
  SidebarComponent,
  FootbarComponent,
  MainDashboardComponent,
  PageNotFoundComponent];


@NgModule({
  declarations: CORE_COMPONENTS,
  imports: [
    CommonModule
  ],
  exports: CORE_COMPONENTS
})
export class ScmMainModule { }
