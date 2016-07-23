import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import {GeolocationService} from '../../providers/geolocation-service/geolocation-service';
import {RestaurantMapPage} from '../restaurant-map/restaurant-map';
import {TranslatePipe} from '../../pipes/translate';

@Component({
  templateUrl: 'build/pages/restaurant-details/restaurant-details.html',
  pipes: [TranslatePipe],
  providers: [GeolocationService]
})
export class RestaurantDetailsPage {
  static get parameters() {
    return [[NavController],[NavParams],[GeolocationService]];
  }

  constructor(nav,navParams,geolocationService) {
    this.geolocationService = geolocationService;
    this.RestaurantMapPage = RestaurantMapPage;
    this.nav = nav;
    this.navParams = navParams;
    this.item_select = this.navParams.get('item_select');
    console.log(this.item_select);

    // this.placeImage();

    this.photos = [];
    this.results = [];
    this.reviews = [];

    this.disable = null;
  }

  ionViewWillEnter(){
    var me = this;
    console.log('detail');
    console.log(document.getElementById('resto_map_dtl'));
    me.geolocationService.setPlaceDetails('resto_map_dtl',me.item_select.place_id).then(function (res) {
      console.log(res[0]);
      console.log('inner');
      me.results = res[0];

      if (res[0].reviews!==undefined) {
        me.reviews = res[0].reviews;
        me.setReviewRating();
        for (var i = 0; i < me.reviews.length; i++) {
          if (navigator.language=='en-US') {
            me.reviews[i].time = new Date(me.reviews[i].time*1000).toLocaleDateString('ja-JP');
          }
          else {
            me.reviews[i].time = new Date(me.reviews[i].time*1000).toLocaleDateString('en-US');
          }
        }
      }

      if (res[0].photos!==undefined) {
        for (var i = 0; i < res[0].photos.length; i++) {
          me.photos.push(res[0].photos[i].getUrl({'maxWidth': 300, 'maxHeight': 300}));
        }
        console.log(me.photos);
      }
      else {
        me.photos.push(res[0].icon);
      }

    });
  }

  ionViewLoaded(){

    var me = this;

    // setTimeout(function() {
      var x = document.getElementById("resto_rating");
      var y = document.getElementById("operating_hours");
      var z = document.getElementById("place_photo");
      var rating,half,remaining;

      // for (var a = 0; a < me.item_select.rating.length; a++) {
        //rating number
        rating = Math.floor(me.item_select.rating);
        //get decimal num if there is
        half = (me.item_select.rating % 1).toFixed(1);
        //reamianing stars to append
        remaining = Math.floor(5 - me.item_select.rating);

        if (me.item_select.rating!=0) {
          var ctr = 0;
          for (var b = 1; b <= rating; b++) {
            x.insertAdjacentHTML( 'beforeend', '<ion-icon primary name="star" role="img" class="ion-ios-star" aria-label="ios-star"></ion-icon>');
            ctr=ctr+1;
          }
          //int
          if (me.item_select.rating % 1 === 0) {
            if (remaining !== 0 && ctr<=5) {
              for (var b = 1; b <= (5-ctr); b++) {
                x.insertAdjacentHTML( 'beforeend', '<ion-icon primary name="star-outline" role="img" class="ion-ios-star-outline" aria-label="ios-star-outline"></ion-icon>');
              }
              ctr=ctr+1;
            }
          }
          //float
          else if (me.item_select.rating % 1 !== 0) {
            if (half !== 0.0 && (me.item_select.rating %1 !== 0)) {
              x.insertAdjacentHTML( 'beforeend', '<ion-icon primary name="star-half" role="img" class="ion-ios-star-half" aria-label="ios-star-half"></ion-icon>');
              ctr=ctr+1;
            }
            if (remaining !== 0 && ctr<=5) {
              for (var b = 1; b <= (5-ctr); b++) {
                x.insertAdjacentHTML( 'beforeend', '<ion-icon primary name="star-outline" role="img" class="ion-ios-star-outline" aria-label="ios-star-outline"></ion-icon>');
                ctr=ctr+1;
              }

            }
          }
          console.log(ctr+" ctr");
        }
        //appending store open
        if (me.item_select.opening_hours!==undefined) {
          if (me.item_select.opening_hours.open_now!==undefined) {
            if (me.item_select.opening_hours.open_now === true) {
              y.insertAdjacentHTML( 'beforeend', '<ion-label secondary>Open <ion-icon name="clock" role="img" class="ion-ios-clock-outline" aria-label="ios-clock-outline"></ion-icon></ion-label>');
            }
            else {
              y.insertAdjacentHTML( 'beforeend', '<ion-label danger>Close <ion-icon name="clock" role="img" class="ion-ios-clock-outline" aria-label="ios-clock-outline"></ion-icon></ion-label>');
              ctr=ctr+1;
            }
          }
        }

  }

  setReviewRating(){
    var me = this;

    setTimeout(function() {
    var w = document.getElementsByClassName("review_rating");
    var rating,half,remaining;

    console.log("Set Review Rating");
    console.log(me.reviews);
    console.log(document.getElementsByClassName("review_rating"));

    for (var a = 0; a < me.reviews.length; a++) {
      if (w[a]!==undefined) {
        //rating number
        rating = Math.floor(me.reviews[a].rating);
        //get decimal num if there is
        half = (me.reviews[a].rating % 1).toFixed(1);
        //reamianing stars to append
        remaining = Math.floor(5 - me.reviews[a].itm_rating);

        if (me.reviews[a].rating!=0) {
          var ctr = 0;
          if (w[a].innerHTML=="") {
            for (var b = 1; b <= rating; b++) {
              w[a].insertAdjacentHTML( 'beforeend', '<ion-icon primary name="star" role="img" class="ion-ios-star" aria-label="ios-star"></ion-icon>');
              ctr=ctr+1;
            }
            //int
            if (me.reviews[a].rating % 1 === 0) {
              if (remaining !== 0 && ctr<=5) {
                for (var b = 1; b <= (5-ctr); b++) {
                  w[a].insertAdjacentHTML( 'beforeend', '<ion-icon primary name="star-outline" role="img" class="ion-ios-star-outline" aria-label="ios-star-outline"></ion-icon>');
                }
                ctr=ctr+1;
              }
            }
            //float
            else if (me.reviews[a].rating % 1 !== 0) {
              if (half !== 0.0 && (me.reviews[a].rating %1 !== 0)) {
                w[a].insertAdjacentHTML( 'beforeend', '<ion-icon primary name="star-half" role="img" class="ion-ios-star-half" aria-label="ios-star-half"></ion-icon>');
                ctr=ctr+1;
              }
              if (remaining !== 0 && ctr<=5) {
                for (var b = 1; b <= (5-ctr); b++) {
                  w[a].insertAdjacentHTML( 'beforeend', '<ion-icon primary name="star-outline" role="img" class="ion-ios-star-outline" aria-label="ios-star-outline"></ion-icon>');
                  ctr=ctr+1;
                }
              }
            }
            console.log(ctr+" ctr");
          }
        }
      }
    }
  }, 500);
}

}
