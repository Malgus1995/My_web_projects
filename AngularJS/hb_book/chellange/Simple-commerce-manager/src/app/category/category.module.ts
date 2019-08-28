import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManegementComponent } from './category-manegement/category-manegement.component'



@NgModule({
  declarations: [CategoryManegementComponent],
  imports: [
    CommonModule
  ]
  ,exports: [CategoryManegementComponent]
})
export class CategoryModule { }
