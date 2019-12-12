import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides,NavController}          from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras}     from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  @ViewChild('mySlider',{static:true}) slider: IonSlides;
  constructor(private router        : Router,
              public route         : ActivatedRoute,
              public nav : NavController) { }

  ngOnInit() {
  }

  AddCartItem(){
    this.nav.navigateForward('/view-cart');
  }

  checkOutOrder() {
    this.nav.navigateForward('/check-out-order');
  }

}
