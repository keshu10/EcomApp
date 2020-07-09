import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController, PopoverController } from '@ionic/angular';
import { DatabaseService } from '../service/database.service';
import { AuthService } from '../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PopOverPageAddress }      from "./pop-over-page-address";
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-myaddress',
  templateUrl: './myaddress.page.html',
  styleUrls: ['./myaddress.page.scss'],
})
export class MyaddressPage implements OnInit {

  addressEditRemove          : any;
  addressListDisplay         : Observable<any>;

  constructor(public navCtrl : NavController, private toastCtrl : ToastController, 
    public databaseService : DatabaseService, public authService : AuthService,
    public alertCtrl       : AlertController, private router         : Router, 
    private route : ActivatedRoute, public popoverCtrl : PopoverController, private afs: AngularFirestore) { 

      this.getAddress();
    }

  ngOnInit() {
  }

  addNewAddress() {
    this.navCtrl.navigateForward('add-new-address');
  }

  getAddress() {
    const self = this;
    const scoresRef = this.afs.collection('UserCollection').doc(localStorage.id).collection('OrderAddress');
    this.addressListDisplay = scoresRef.valueChanges();
  }

  async showPopOver(myEvent) {
    var self = this;
   const popover = await this.popoverCtrl.create({
     component   : PopOverPageAddress,
     event       : myEvent,
     translucent : true,
     componentProps: {
         cssClass: 'my-custom-popover'
       }
   });
   
   await popover.present();

   const {data} = await popover.onDidDismiss()
     //self.isCatalogOrOutOfStock = type;
      if(data){
        self.addressEditRemove = data;
        switch(data) {
            case "edit":
              this.navCtrl.navigateForward('login');
            break;
            case "delete":
                
            break;
        }
      }
  }

}
