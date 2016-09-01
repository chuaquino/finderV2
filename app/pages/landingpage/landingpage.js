import {Component} from '@angular/core';
import {NavParams, NavController, AlertController} from 'ionic-angular';
import {GeolocationService} from '../../providers/geolocation-service/geolocation-service';
import {MainPage} from '../main/main';
import {TranslatePipe} from '../../pipes/translate';

@Component({
  templateUrl: 'build/pages/landingpage/landingpage.html',
  providers: [GeolocationService],
  pipes: [TranslatePipe]
})
export class LandingPage {
  static get parameters() {
    return [[GeolocationService],[NavParams],[NavController],[AlertController]];
  }

  constructor(geolocationService,navParams,nav,alert) {
    this.MainPage = MainPage;
    this.geolocationService = geolocationService;
    this.navParams = navParams;
    this.nav = nav;
    this.alert = alert;

    this.geolocation = '';
  }

  ionViewWillEnter(){
    var me = this;
    me.geolocationService.loadGeolocation();
  }
  autocomplete(searchbar){
    var me = this;
    me.geolocationService.autoComplete('landingpage');
  }

  ionViewWillEnter(){
    var me = this;
    me.geolocationService.loadGeolocation()
  }

  showlatlong(event) {
    var me = this;
    var geoCoords = {};

    document.getElementById('lndBtnLoc').style.display = "none";
    document.getElementById('lndLoaderLoc').style.display = "inline";

    console.log("geolocation working");

    var options = {maximumAge: 0, timeout: 10000, enableHighAccuracy:true};

    navigator.geolocation.getCurrentPosition(

        (position) => {
            geoCoords.lat = position.coords.latitude;
            geoCoords.lng = position.coords.longitude;
            // me.geoCoords = position.coords.latitude  + ',' + position.coords.longitude;

            var gCoords = position.coords.latitude  + ',' + position.coords.longitude;
            console.log(geoCoords);
             me.geolocationService.setLocationName(gCoords).then(function(locName) { // `delay` returns a promise
                // Log the value once it is resolved
             me.geolocation = locName;

             geoCoords.locationName = locName;

             if (locName!==undefined) {
               setTimeout(function() {
                 me.nav.push(MainPage, { geoloc: geoCoords });
               }, 2000);
               console.log(me.geolocation);
             }


            });
        },

        (error) => {
          switch(error.code)
          {
          case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
          }
            console.log(error.code);
            me.locErrMsg();
        }, options);

  }

  locErrMsg(){
    var me = this;
    let alert = me.alert.create({
      title: 'No location found',
      subTitle: 'Either GPS signals are weak or GPS is switched off',
      buttons: [{
        text: 'OK',
        handler: data => {
          this.nav.pop();
        }
      }]
    });
    this.nav.present(alert);
    document.getElementById('lndBtnLoc').style.display = "inline";
    document.getElementById('lndLoaderLoc').style.display = "none";
  }


}
