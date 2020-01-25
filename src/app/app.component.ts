import { Component } from '@angular/core';

import { Platform, ModalController, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
    public navCtrl       : NavController
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

  sideMenu()
  {
    // this.navigate =
    // [
    //   {
    //     title : "Home",
    //     url   : "/tabs/tab1",
    //     icon  : "home"
    //   },
    //   {
    //     title : "Categories",
    //     url   : "/tabs/tab2",
    //     icon  : "apps"
    //   },
    //   {
    //     title : "Contacts",
    //     url   : "/tabs/tab3",
    //     icon  : "contacts"
    //   },
    // ]
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
