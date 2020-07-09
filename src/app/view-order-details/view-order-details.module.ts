import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewOrderDetailsPageRoutingModule } from './view-order-details-routing.module';
import { IonicRatingModule } from "ionic4-rating";
import { ViewOrderDetailsPage } from './view-order-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    ViewOrderDetailsPageRoutingModule
  ],
  declarations: [ViewOrderDetailsPage]
})
export class ViewOrderDetailsPageModule {}
