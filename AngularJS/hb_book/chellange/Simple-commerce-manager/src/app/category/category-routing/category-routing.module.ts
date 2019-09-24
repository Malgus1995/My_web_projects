import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { CategoryManegementComponent} from '../category-manegement/category-manegement.component';

const routes: Routes = [{ path: 'category-list', component: CategoryManegementComponent}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
