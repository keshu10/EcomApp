import { Component } from '@angular/core';

import { Platform, ModalController, MenuController, NavController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public navigate : any;
  constructor(
    private platform     : Platform,
    private splashScreen : SplashScreen,
    private statusBar    : StatusBar,
    public  modalCtrl    : ModalController,
    private menu         : MenuController,
    public navCtrl       : NavController,
    public alertCtrl     : AlertController,
    public authService   : AuthService
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() { 

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
                self.menu.close();
							}
						});
					}
				}
			]
		});
		await alert.present();
	}

  openHome() {
    this.navCtrl.navigateForward('tabs/tab1');
    this.menu.close();
  }

  loginSignUp() {
    this.navCtrl.navigateForward('login');
    this.menu.close();
  }

  closeEnd() {
    this.menu.close();
  }
}
