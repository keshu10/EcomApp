import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckOutOrderPageRoutingModule } from './check-out-order-routing.module';

import { CheckOutOrderPage } from './check-out-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckOutOrderPageRoutingModule
  ],
  declarations: [CheckOutOrderPage]
})
export class CheckOutOrderPageModule {}
