import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductManagementComponent} from '../product-management/product-management.component';

const routes: Routes = [{
  path: 'product-list',
  component: ProductManagementComponent
}];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
})
export class ProductRoutingModule { }
