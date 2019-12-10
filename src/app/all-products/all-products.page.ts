import { Component, OnInit } from '@angular/core';
import {IonSlides,NavController}          from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras}     from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.page.html',
  styleUrls: ['./all-products.page.scss'],
})
export class AllProductsPage implements OnInit {

  constructor(private router        : Router,
              public route         : ActivatedRoute,
              public nav : NavController) { }

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

}
