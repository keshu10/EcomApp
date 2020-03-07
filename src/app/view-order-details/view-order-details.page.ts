import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.page.html',
  styleUrls: ['./view-order-details.page.scss'],
})
export class ViewOrderDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hideShowTrack() {
    var x = document.getElementById("hide").classList.toggle("show");
    var y = document.getElementById("downrotate").classList.toggle("dropdown");
  }

  logRatingChange(feedback, event){
    var self     = this;
      var messages : any;
      //var rating1  : any;
      if(feedback){
          messages = "Thank you for feedback"
      }else{
          messages = "Thank you for rating";
      }
      if(event){
          var rating     = event;
          //var btnC   = CT.getElementsByClassName("activated");
          //var rating = btnC[0].id;
          //rating1    = Number(rating) + 1;
      }
      // self.authData.addUserFeedback(function(success){
      //     self.presentToast(messages, 'cmnToastSuccesss');
      //     if(rating){
      //         self.authData.storeMyCredit(function(success){
      //         },"onReviewApp", "", "5");
      //     }
      // },feedback, rating);
  }

}
