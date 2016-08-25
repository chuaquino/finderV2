import {Component} from '@angular/core';
import {NavController, NavParams, Alert} from 'ionic-angular';
import {Geolocation,InAppBrowser} from 'ionic-native';
import {GeolocationService} from '../../providers/geolocation-service/geolocation-service';
import {UniMapPage} from '../uni-map-page/uni-map-page';
import {TranslatePipe} from '../../pipes/translate';

@Component({
  templateUrl: 'build/pages/uni-detail-page/uni-detail-page.html',
  pipes: [TranslatePipe],
  providers: [GeolocationService]
})
export class UniDetailPage {
  static get parameters() {
    return [[NavController],[NavParams],[GeolocationService]];
  }

  constructor(nav,navParams,geolocationService) {  
    this.nav = nav;
    this.navParams = navParams;
    this.geolocationService = geolocationService;
    this.UniMapPage = UniMapPage;
    this.item_select = this.navParams.get('item_select');
    this.page = navParams.get('page');
    console.log(this.item_select);

    this.photos = [];
    this.results = [];
    this.reviews = [];

    this.disable = null;
  }

//   ionViewWillEnter(){
//     var me = this;
//     console.log('detail');
//     console.log(document.getElementById('resto_map_dtl'));
//
//     me.geolocationService.setPlaceDetails('resto_map_dtl',me.item_select.place_id).then(function (res) {
//       console.log(res[0]);
//       console.log('inner');
//       me.results = res[0];
//
//       if (res[0].reviews!==undefined) {
//         me.reviews = res[0].reviews;
//         me.setReviewRating();
//       }
//
//       if (res[0].photos!==undefined) {
//         for (var i = 0; i < res[0].photos.length; i++) {
//           me.photos.push(res[0].photos[i].getUrl({'maxWidth': 300, 'maxHeight': 300}));
//         }
//         console.log(me.photos);
//       }
//       else {
//         me.photos.push(res[0].icon);
//       }
//
//       me.contact = res[0].international_phone_number;
//       me.insertPlaceContact();
//
//     });
//   }
//
  ionViewLoaded() {

    var me = this;

    var x = document.getElementById("resto_rating");
    var y = document.getElementById("operating_hours");
    var rating,half,remaining;

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

    // PLace details results storing -Start
    console.log(me.item_select);

    if (me.item_select.reviews!==undefined) {
      me.reviews = me.item_select.reviews;
      me.setReviewRating();
    }

    if (me.item_select.photos!==undefined) {
      for (var i = 0; i < me.item_select.photos.length; i++) {
        me.photos.push(me.item_select.photos[i].getUrl({'maxWidth': 300, 'maxHeight': 300}));
      }
      console.log(me.photos);
    }
    else {
      me.photos.push(me.item_select.icon);
    }

    me.contact = me.item_select.international_phone_number;
    me.insertPlaceContact();

    // PLace details results storing -END
  }

  launchWebsite(url){

    var link = url;
    var w = document.getElementById('website_btn');

    if (link !== undefined){
      console.log(link);
      console.log('launchWebsite function');

      InAppBrowser.open(link, '_blank');
    }
    else{
      console.log("Website not available");
      let alert = Alert.create({
        title: 'Website not Available',
        subTitle: 'This oraganization has no Website Information',
        buttons: [{
          text: 'OK',
          handler: data => {
            this.nav.pop();
          }
        }]
      });
      this.nav.present(alert);
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
//
  insertPlaceContact(){
  console.log('insertPlaceContact');
    var me = this;
    var v = document.getElementById('place_contact');
    console.log(me.contact);

    if (me.contact !== undefined){
      v.insertAdjacentHTML( 'beforeend', '<ion-icon primary name="ios-call" role="img" class="ion-ios-call" aria-label="ios-call"></ion-icon><span class="contact_no">&nbsp;&nbsp;'+ me.contact + '</span>');
    }

    else{
      v.insertAdjacentHTML( 'beforeend', '<ion-icon primary name="ios-call" role="img" class="ion-ios-call" aria-label="ios-call" style="color:#B7B7B7;"></ion-icon><span style="color:#B7B7B7;">&nbsp;&nbsp;(No contact number provided.)</span>');
    }
  }

}
