import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  constructor(public navCtrl : NavController) { }

  ngOnInit() {
  }

  startShopping() {
    this.navCtrl.navigateForward('tabs/tab1');
  }

}
