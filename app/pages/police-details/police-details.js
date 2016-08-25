import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import {GeolocationService} from '../../providers/geolocation-service/geolocation-service';
import {LoadingModal} from '../../components/loading-modal/loading-modal';
import {PoliceMapPage} from '../police-map/police-map';
import {TranslatePipe} from '../../pipes/translate';

@Component({
  templateUrl: 'build/pages/police-details/police-details.html',
  pipes: [TranslatePipe],
  providers: [GeolocationService]
})
export class PoliceDetailsPage {
  static get parameters() {
    return [[NavParams],[NavController],[GeolocationService]];
  }

  constructor(navParams,nav,geolocationService) {
    this.navParams = navParams;
    this.nav = nav;
    this.geolocationService = geolocationService;
    this.PoliceMapPage = PoliceMapPage;

    this.item_select_police = this.navParams.get('item_select_police');
    console.log(this.item_select_police);

    this.photos = [];
    this.results = [];
    this.reviews = [];

  }

  // ionViewDidEnter(){
  //   this.geolocationService.getPolHosp(this.poldetail,'police');

<<<<<<< HEAD
  ionViewWillEnter(){
    var me = this;
    console.log('detail');
    console.log(document.getElementById('police_map_dtl'));
    me.geolocationService.setPlaceDetails('police_map_dtl',me.item_select_police.place_id).then(function (res) {
      console.log(res[0]);
      console.log('inner');
      me.results = res[0];

      if (res[0].reviews!==undefined) {
        me.reviews = res[0].reviews;
        me.setReviewRating();
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

      if (res[0].international_phone_number !== undefined){
        me.contact = res[0].international_phone_number;
        me.insertPlaceContact();
      }

    });

  }
=======
  // ionViewWillEnter(){
  //   var me = this;
  //   console.log('detail');
  //   console.log(document.getElementById('police_map_dtl'));
  //   me.geolocationService.setPlaceDetails('police_map_dtl',me.item_select_police.place_id).then(function (res) {
  //     console.log(res[0]);
  //     console.log('inner');
  //     me.results = res[0];
  //
  //     if (me.item_select_police.reviews!==undefined) {
  //       me.reviews = me.item_select_police.reviews;
  //       me.setReviewRating();
  //     }
  //
  //     if (me.item_select_police.photos!==undefined) {
  //       for (var i = 0; i < me.item_select_police.photos.length; i++) {
  //         me.photos.push(me.item_select_police.photos[i].getUrl({'maxWidth': 300, 'maxHeight': 300}));
  //       }
  //       console.log(me.photos);
  //     }
  //     else {
  //       me.photos.push(me.item_select_police.icon);
  //     }
  //
  //     if (me.item_select_police.international_phone_number !== undefined){
  //       me.contact = me.item_select_police.international_phone_number;
  //       me.insertPlaceContact();
  //     }
  //
  //   });
  // }
>>>>>>> 2b79b1251d0c2d6a7133a1efa53c4d3e7a243f13

  ionViewLoaded(){
    var me = this;
    // setTimeout(function() {
      var x = document.getElementById("police_rating");
      var y = document.getElementById("operating_hours");
      var rating,half,remaining;
      // for (var a = 0; a < me.item_select.rating.length; a++) {
        //rating number
        rating = Math.floor(me.item_select_police.rating);
        //get decimal num if there is
        half = (me.item_select_police.rating % 1).toFixed(1);
        //reamianing stars to append
        remaining = Math.floor(5 - me.item_select_police.rating);

        if (me.item_select_police.rating!=0) {
          var ctr = 0;
          for (var b = 1; b <= rating; b++) {
            x.insertAdjacentHTML( 'beforeend', '<ion-icon primary name="star" role="img" class="ion-ios-star" aria-label="ios-star"></ion-icon>');
            ctr=ctr+1;
          }
          //int
          if (me.item_select_police.rating % 1 === 0) {
            if (remaining !== 0 && ctr<=5) {
              for (var b = 1; b <= (5-ctr); b++) {
                x.insertAdjacentHTML( 'beforeend', '<ion-icon primary name="star-outline" role="img" class="ion-ios-star-outline" aria-label="ios-star-outline"></ion-icon>');
              }
              ctr=ctr+1;
            }
          }
          //float
          else if (me.item_select_police.rating % 1 !== 0) {
            if (half !== 0.0 && (me.item_select_police.rating %1 !== 0)) {
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
        console.log(me.item_select_police.opening_hours);
        if (me.item_select_police.opening_hours!==undefined) {
          if (me.item_select_police.opening_hours.open_now!==undefined) {
            if (me.item_select_police.opening_hours.open_now === true) {
              y.insertAdjacentHTML( 'beforeend', '<ion-label secondary>Open <ion-icon name="clock" role="img" class="ion-ios-clock-outline" aria-label="ios-clock-outline"></ion-icon></ion-label>');
            }
            else {
              y.insertAdjacentHTML( 'beforeend', '<ion-label danger>Close <ion-icon name="clock" role="img" class="ion-ios-clock-outline" aria-label="ios-clock-outline"></ion-icon></ion-label>');
              ctr=ctr+1;
            }

          }

        }
        if (me.item_select_police.reviews!==undefined) {
          me.reviews = me.item_select_police.reviews;
          me.setReviewRating();
        }

        if (me.item_select_police.photos!==undefined) {
          for (var i = 0; i < me.item_select_police.photos.length; i++) {
            me.photos.push(me.item_select_police.photos[i].getUrl({'maxWidth': 300, 'maxHeight': 300}));
          }
          console.log(me.photos);
        }
        else {
          me.photos.push(me.item_select_police.icon);
        }

        if (me.item_select_police.international_phone_number !== undefined){
          me.contact = me.item_select_police.international_phone_number;
          me.insertPlaceContact();
        }
      // }

    // }, 400);

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

insertPlaceContact(){
  var me = this;

  setTimeout(function() {
      var v = document.getElementById('place_contact');
      // var rating,half,remaining;

      console.log("Place contact method");
      console.log(me.contact);

      v.insertAdjacentHTML( 'beforeend', '<ion-icon primary name="ios-call" role="img" class="ion-ios-call" aria-label="ios-call"></ion-icon><span class="contact_no">&nbsp;&nbsp;&nbsp;'+ me.contact + '</span>');
    }, 500);
  }

}
// import {Component} from '@angular/core';
// import {NavParams, Storage, SqlStorage, IonicApp, NavController} from 'ionic-angular';
// import {DataService} from '../../services/data';
// import {PoliceMapPage} from '../police-map/police-map';
// import {GeolocationService} from '../../providers/geolocation-service/geolocation-service';
// import {LoadingModal} from '../../components/loading-modal/loading-modal';
// import {TranslatePipe} from '../../pipes/translate';
// /*
//   Generated class for the PoliceDetailsPage page.
//
//   See http://ionicframework.com/docs/v2/components/#navigation for more info on
//   Ionic pages and navigation.
// */
// @Component({
//   templateUrl: 'build/pages/police-details/police-details.html',
//   directives: [LoadingModal],
//   providers: [GeolocationService],
//   pipes: [TranslatePipe]
// })
// export class PoliceDetailsPage {
//   static get parameters() {
//     return [[DataService],[NavParams],[NavController],[GeolocationService]];
//   }
//
//   constructor(dataService,navParams,nav,geolocationService) {
//     this.dataService = dataService;
//     this.navParams = navParams;
//     this.nav = nav;
//     this.geolocationService = geolocationService;
//
//     this.PoliceMapPage = PoliceMapPage;
//
//     this.poldetail = this.navParams.get('poldetail');
//   }
//   ionViewDidEnter(){
//     this.geolocationService.getPolHosp(this.poldetail,'police');
//   }
// }
