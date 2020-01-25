import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterProductPageRoutingModule } from './filter-product-routing.module';

import { FilterProductPage } from './filter-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterProductPageRoutingModule
  ],
  declarations: [FilterProductPage]
})
export class FilterProductPageModule {}
