import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {MainDashboardComponent} from '../scm-main/main-dashboard/main-dashboard.component';
import {PageNotFoundComponent} from '../scm-main/page-not-found/page-not-found.component';
import {ProductManagementComponent} from '../product/product-management/product-management.component';
import {CategoryManegementComponent} from '../category/category-manegement/category-manegement.component';

const routes: Routes = [
  { path: 'product-list', component: ProductManagementComponent},
  { path: 'category-list', component: CategoryManegementComponent},
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
