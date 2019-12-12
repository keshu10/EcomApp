import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides,NavController}          from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras}     from '@angular/router';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.page.html',
  styleUrls: ['./view-cart.page.scss'],
})
export class ViewCartPage implements OnInit {

  constructor(private router        : Router,
              public route         : ActivatedRoute,
              public nav : NavController) { }

  ngOnInit() {
  }

  checkOutOrder() {
    this.nav.navigateForward('/check-out-order');
  }

}
