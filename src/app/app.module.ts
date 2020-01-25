import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { RateReviewPageModule } from './rate-review/rate-review.module';
import { IonicRatingModule }    from 'ionic4-rating';
import { FilterProductPageModule } from './filter-product/filter-product.module';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireStorageModule,
    RateReviewPageModule,
    IonicRatingModule,
    FilterProductPageModule,
    FormsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
