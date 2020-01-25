import { Component, OnInit } from '@angular/core';
import {IonSlides,NavController,ModalController}          from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras}     from '@angular/router';
import { FilterProductPage } from '../filter-product/filter-product.page';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.page.html',
  styleUrls: ['./all-products.page.scss'],
})
export class AllProductsPage implements OnInit {

  
  constructor(private router        : Router,
              public route         : ActivatedRoute,
              public nav : NavController,
              public modalController : ModalController) { }

  ngOnInit() {
  }

  productDetails(){
    let navigationExtras: NavigationExtras = {
      state: {
        productObject : 'best of best'
      }
    };
    this.router.navigate(['product-details'], navigationExtras);
  }

  async openPriceFilterModal() {
    const modal = await this.modalController.create({
      component: FilterProductPage
    });
    return await modal.present();
  }

}
