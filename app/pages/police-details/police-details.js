import {Page, NavParams, Storage, SqlStorage, IonicApp, NavController} from 'ionic-angular';
import {DataService} from '../../services/data';
import {PolicePage} from '../police/police';
import {GeolocationService} from '../../providers/geolocation-service/geolocation-service';
/*
  Generated class for the PoliceDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/police-details/police-details.html',
  providers: [GeolocationService]
})
export class PoliceDetailsPage {
  static get parameters() {
    return [[DataService],[NavParams],[NavController],[GeolocationService]];
  }

  constructor(dataService,navParams,nav,geolocationService) {
    this.dataService = dataService;
    this.navParams = navParams;
    this.nav = nav;
    this.geolocationService = geolocationService;

    this.PolicePage = PolicePage;

    this.poldetail = this.navParams.get('poldetail');
  }
  onPageLoaded(){
    this.geolocationService.getPolice(this.poldetail);
  }
}
