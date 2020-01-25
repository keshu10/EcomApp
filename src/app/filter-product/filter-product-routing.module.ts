import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterProductPage } from './filter-product.page';

const routes: Routes = [
  {
    path: '',
    component: FilterProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterProductPageRoutingModule {}
