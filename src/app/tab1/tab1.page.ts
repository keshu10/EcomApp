import { Component,ViewChild,OnInit } from '@angular/core';
import {IonSlides}          from '@ionic/angular';

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
  constructor() {

  }

  ngOnInit() {}

}
