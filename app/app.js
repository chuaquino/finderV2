import {App, IonicApp, Platform, Storage, SqlStorage} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {MainPage} from './pages/main/main';
import {TabsPage} from './pages/jeepney/tabs/tabs';
import {RestaurantPage} from './pages/restaurant/restaurant';
// import {JeepneyRoutesPage} from './pages/jeepney/jeep-routes/jeep-routes';
// import {ListPage} from './pages/list/list';

import {DataService} from './services/data';

import {ConnectivityService} from './providers/connectivity-service/connectivity-service';
import {GoogleMapsService} from './providers/google-maps-service/google-maps-service';

// import {LoadingModal} from './components/loading-modal/loading-modal';




@App({
  templateUrl: 'build/app.html',
  providers: [DataService,ConnectivityService,GoogleMapsService],
  config: {
    iconMode: 'md',
    modalEnter: 'modal-slide-in',
    modalLeave: 'modal-slide-out',
    pageTransition: 'ios',
    tabSubPages: false,
    backButtonIcon: 'ios-arrow-back',
    tabbarPlacement: 'top',
    backButtonText: ''
    // menuType: 'reveal'
  } // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  static get parameters() {
    return [[IonicApp], [Platform]];
  }

  constructor(app, platform) {
    // set up our app
    this.app = app;
    this.platform = platform;
    this.initializeApp();
    // make HelloIonicPage the root (or first) page
    this.rootPage = MainPage;
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
