import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, NavController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-add-new-address',
  templateUrl: './add-new-address.page.html',
  styleUrls: ['./add-new-address.page.scss'],
})
export class AddNewAddressPage implements OnInit {

  public pincode                 : any = "";
	public name                    : any = "";
  public houseNo	               : any = "";
  public areaColony              : any = "";
  public landMark                : any = "";
  public state                   : any = "";
  public city                    : any = "";
  public mobileNumber            : any;
  public countryCode             : any = {code:"+91"};
  public addressType             : any = "";

  pinCodeError                 : any;
  fullNameError                : any;
  houseNoError                 : any;
  areaColonyError              : any;
  landMarkError                : any;
  stateError                   : any;
  cityError                    : any;
  mobileNoError                : any;

  constructor(public modalController: ModalController, public navCtrl: NavController,
    public toastController: ToastController) { }

  ngOnInit() {
  }

    //checkInputValue for check null values
	checkInputValue(inputValue)  {
		var self = this;
		switch(inputValue) {
			case 'pincode':
			    self.pinCodeError = "";
			    break;
			case 'name':
			    self.fullNameError = "";
			    break;
			case 'houseNo':
				self.houseNoError = "";
				break;
			case 'areaColony':
			  self.areaColonyError = "";
        break;
      case 'landMark':
        self.landMarkError = "";
        break;
      case 'state':
        self.stateError = "";
        break;
      case 'city':
        self.cityError = "";
        break;
      case 'mobileNumber':
        self.mobileNoError = "";
        break;
		}
	}

  saveAddress() {
    var self = this;
    
    if (this.pincode == '' || this.pincode == undefined) {
      this.presentToast('Enter PinCode');
      return;
    } else if (this.name == '' || this.name == undefined) {
      this.presentToast('Enter Full name');
      return;
    } else if (this.houseNo == '' || this.houseNo == undefined) {
      this.presentToast('Enter House No. Building Name');
      return;
    } else if (this.areaColony == '' || this.areaColony == undefined) {
      this.presentToast('Enter Area, Colony Name');
      return;
    } else if (this.landMark == '' || this.landMark == undefined) {
      this.presentToast('Enter landMark');
      return;
    } else if (this.state == '' || this.state == undefined) {
      this.presentToast('Enter state');
      return;
    } else if (this.city == '' || this.city == undefined) {
      this.presentToast('Enter city');
      return;
    } else if (this.mobileNumber == '' || this.mobileNumber == undefined) {
      this.presentToast('Enter mobile Number');
      return;
    } else if (this.addressType == '' || this.addressType == undefined) {
      this.presentToast('Enter mobile Number');
      return;
    } else {
      var StringId = firebase.firestore().collection('UserCollection').doc(localStorage.id).collection('OrderAddress').doc().id;
      firebase.firestore().collection('UserCollection').doc(localStorage.id).collection('OrderAddress').add({
        'pincode' : this.pincode ? this.pincode : '',
        'FullName'  : this.name ? this.name : '',
        'HouseNo' : this.houseNo ? this.houseNo : '',
        'areaColony' : this.areaColony ? this.areaColony : '',
        'landMark' : this.landMark ? this.landMark : '',
        'State' : this.state ? this.state : '',
        'City' : this.city ? this.city : '',
        'mobileNumber' : this.mobileNumber ? this.mobileNumber : '',
        'addressType' : this.addressType ? this.addressType : '',
        'id' : StringId
      })
      .then(function(docRef) {
        self.navCtrl.pop();
     })
     .catch(function(error) {
         console.error("Error writing document3: ", error);
     });
    }
  }

  async presentToast(text, position: any = 'bottom', duration: any = 3000, showCloseButton: any = false) {
    const toast = await this.toastController.create({
        message: text,
        position: position,
        duration: duration,
        showCloseButton: showCloseButton,
        closeButtonText: 'Ok'
    });
    toast.present();
  }

}
