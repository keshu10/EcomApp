import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.page.html',
  styleUrls: ['./filter-product.page.scss'],
})
export class FilterProductPage implements OnInit {

  // initialize default min and max price range value
  public MIN_PRICE_DEFAULT_VALUE = 1;
  public MAX_PRICE_DEFAULT_VALUE = 1000;

  constructor(public modalController : ModalController) { }

  ngOnInit() {
  } 

  async close() {
    await this.modalController.dismiss();
  }

}
