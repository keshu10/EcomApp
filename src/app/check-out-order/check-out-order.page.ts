import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides,NavController}          from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras}     from '@angular/router';

@Component({
  selector: 'app-check-out-order',
  templateUrl: './check-out-order.page.html',
  styleUrls: ['./check-out-order.page.scss'],
})
export class CheckOutOrderPage implements OnInit {

  constructor(private router        : Router,
              public route         : ActivatedRoute,
              public nav : NavController) { }

  ngOnInit() {
  }

}
