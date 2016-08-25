import {Component} from '@angular/core';
import {Platform, ionicBootstrap, Storage, SqlStorage} from 'ionic-angular';
import {StatusBar} from 'ionic-native';


// import {App, IonicApp, Platform, Storage, SqlStorage} from 'ionic-angular';
// import {StatusBar} from 'ionic-native';
import {MainPage} from './pages/main/main';
import {TabsPage} from './pages/jeepney/tabs/tabs';
import {LandingPage} from './pages/landingpage/landingpage';
// import {Splashscreen} from 'ionic-native';
// import {JeepneyRoutesPage} from './pages/jeepney/jeep-routes/jeep-routes';
// import {ListPage} from './pages/list/list';

import {DataService} from './services/data';

import {ConnectivityService} from './providers/connectivity-service/connectivity-service';
import {GoogleMapsService} from './providers/google-maps-service/google-maps-service';

import {LoadingModal} from './components/loading-modal/loading-modal';




@Component({
  templateUrl: 'build/app.html'
  // providers: [DataService,ConnectivityService],
  // directives: [LoadingModal]
})
export class MyApp {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {

    this.platform = platform;
    this.initializeApp();
    // make HelloIonicPage the root (or first) page
    this.rootPage = LandingPage;
  }



  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      // this.storage = new Storage(SqlStorage);
      // this.storage.query('CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)').then((data) => {
      //     console.log("TABLE CREATED -> " + JSON.stringify(data.res));
      // }, (error) => {
      //     console.log("ERROR -> " + JSON.stringify(error.err));
      // });

    });
  }



}
ionicBootstrap(MyApp, [DataService,ConnectivityService], {
  iconMode: 'md',
  backButtonIcon: 'ios-arrow-back',
  backButtonText: '',
  tabsHideOnSubPages: true,
});
