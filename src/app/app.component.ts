import { Component } from '@angular/core';

import { Platform, ModalController, MenuController } from '@ionic/angular';
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
    private menu         : MenuController
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

  closeEnd() {
    this.menu.close();
  }
}
