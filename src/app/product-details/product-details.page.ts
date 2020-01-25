import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, ModalController  }          from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras}     from '@angular/router';
import { RateReviewPage } from '../rate-review/rate-review.page';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  @ViewChild('mySlider',{static:true}) slider: IonSlides;
  constructor(private router        : Router,
              public route          : ActivatedRoute,
              public nav            : NavController,
              public modalController: ModalController) { }

  ngOnInit() {
  }

  async RateProduct() {
    const modal = await this.modalController.create({
      component: RateReviewPage
    });
    return await modal.present();
  }

  AddCartItem(){
    this.nav.navigateForward('/view-cart');
  }

  checkOutOrder() {
    this.nav.navigateForward('/check-out-order');
  }

}
