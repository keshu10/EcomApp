import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RateReviewPageRoutingModule } from './rate-review-routing.module';
import { IonicRatingModule } from "ionic4-rating";
import { RateReviewPage } from './rate-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule ,
    RateReviewPageRoutingModule
  ],
  declarations: [RateReviewPage]
})
export class RateReviewPageModule {}
