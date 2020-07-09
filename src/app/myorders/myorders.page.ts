import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.page.html',
  styleUrls: ['./myorders.page.scss'],
})
export class MyordersPage implements OnInit {

  constructor(public navCtrl : NavController) { }

  ngOnInit() {
  }

  continueShopping() {
    this.navCtrl.navigateForward('tabs/tab1');
  }

  openViewOrderDetail() {
    this.navCtrl.navigateForward('view-order-details');
  }

}
