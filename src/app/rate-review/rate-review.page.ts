import { Component, OnInit } from '@angular/core';
import { IonSlides, NavController, ModalController  }          from '@ionic/angular';
@Component({
  selector: 'app-rate-review',
  templateUrl: './rate-review.page.html',
  styleUrls: ['./rate-review.page.scss'],
})
export class RateReviewPage implements OnInit {

  constructor( public nav            : NavController,
              public modalController: ModalController) { }

  ngOnInit() {
  }

  async close() {
    await this.modalController.dismiss();
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

  submitReview() {
    
  }

}
