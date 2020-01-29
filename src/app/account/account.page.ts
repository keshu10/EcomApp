import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { DatabaseService } from '../service/database.service';
import { AuthService } from '../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  
  userDetails  : any;
  localStorage : any;
  constructor(public navCtrl : NavController, private toastCtrl : ToastController, 
              public databaseService : DatabaseService, public authService : AuthService,
              public alertCtrl       : AlertController, private router         : Router, 
              private route          : ActivatedRoute) {

              var self =this;
              this.authService.user.subscribe((user) => {
                if (user !== null) {
                  self.getUserForAccount();
                }
              });
                this.localStorage = localStorage;
              }

  ngOnInit() {
  }

  loginSignUp() {
    this.navCtrl.navigateForward('login');
  }

  openCreateAccount() {
    this.navCtrl.navigateForward('create-account');
  }

  openHome() {
    this.navCtrl.navigateForward('tabs/tab1');
  }

  getUserForAccount() {
    var self = this;
    self.databaseService.getUser(function(user){
      if(user) {
        self.userDetails = user;
      }
    })
  }

  getNameFirstWord(name) {
    const names = name.trim().split(' ');
    const initials = names[0].substring(0, 1).toUpperCase();
    return initials;
  }

  //logOut for user
	async logOut() {
		var self = this;
		const alert = await self.alertCtrl.create({
			header: 'Are you sure you want to logout ?',
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					handler: (data) => {
					}
				},
				{
					text: 'Ok',
					handler: (data) => {
						//Remove the user storage via userTpe wise
						self.authService.logOutFunction(function(isSucess){
							if(isSucess){
                 //Here we will logOut the user from the fireBase
                self.authService.logout();
                self.navCtrl.navigateRoot('tabs/tab1');
							}
						});
					}
				}
			]
		});
		await alert.present();
	}

}
