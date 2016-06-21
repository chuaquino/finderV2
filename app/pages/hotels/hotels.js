import {Page, NavController, NavParams} from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import {GeolocationService} from '../../providers/geolocation-service/geolocation-service';
import {LoadingModal} from '../../components/loading-modal/loading-modal';

import {TranslatePipe} from '../../pipes/translate';
/*
  Generated class for the HotelsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/hotels/hotels.html',
  directives: [LoadingModal],
   providers: [GeolocationService],
   pipes: [TranslatePipe]
})
export class HotelsPage {
  static get parameters() {
    return [[NavController],[NavParams],[GeolocationService]];
  }

  constructor(nav,navParams,geolocationService) {
    this.HotelsPage = HotelsPage;
    this.nav = nav;
    this.navParams = navParams;
    this.geolocationService = geolocationService;

    this.details = navParams.get('geoloc');

    this.params = {};

    this.placeType = 'lodging';
    this.sort = 'Distance';
    // this.cuisine = 'food';

    this.items = null;

    console.log(this.details);
    console.log("Hotels list working");
  }

  // onPageLoaded(){
  //   var me = this;
  //   me.params.geoloc = this.details;
  //   me.params.placeType = 'lodging';
  //   // me.params.cuisine = 'food';
  //   me.geolocationService.setPlaces(me.params).then(function (res) {
  //     setTimeout(function() {
  //       me.items = res;
  //       // me.setRating();
  //
  //
  //     }, 8000);
  //   });
  // }

  // updateSort(){
  //   var me = this;
  //   me.sortItems(me.sort);
  // }
  //
  // sortItems(sortVal){
  //   var me = this;
  //   if (sortVal == 'Alphabetically') {
  //     me.items.sort(function(a,b) {
  //       if(a.name < b.name) return -1;
  //       if(a.name > b.name) return 1;
  //       return 0;
  //     });
  //   }
  //   else if (sortVal== 'Rating') {
  //     me.items.sort(function(a,b) {
  //       a = a.rating;
  //       b = b.rating;
  //       return a < b ? 1 : (a > b ? -1 : 0);
  //     });
  //     console.log(me.items);
  //   }
  //   else {
  //     me.items.sort(function(a,b) {
  //       a = a.distance;
  //       b = b.distance;
  //       return a < b ? -1 : (a > b ? 1 : 0);
  //     });
  //     console.log(me.items);
  //   }
  // }



}
