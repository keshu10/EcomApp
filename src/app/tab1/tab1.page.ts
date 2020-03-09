import { Component,ViewChild,OnInit } from '@angular/core';
import {IonSlides,NavController}          from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras}     from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild('mySlider',{static:true}) slider: IonSlides;
	sliderOpts = {
		autoplay: true,
		speed: 1000,
		autoplayDisableOnInteraction: false,
		zoom: {
		  maxRatio: 5
		}
	};
  constructor(private router        : Router,
			public route         : ActivatedRoute,
			public nav : NavController) {

  }

  ngOnInit() {
  }

  showProducts(){
	this.nav.navigateForward('/all-products');
  }

  openNotification() {
    this.nav.navigateForward('notification');
  }

}
