import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManegementComponent } from './category-manegement/category-manegement.component';
import { CategoryRoutingModule} from './category-routing/category-routing.module';


@NgModule({
  declarations: [CategoryManegementComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ],
  exports: [CategoryManegementComponent]
})
export class CategoryModule { }
