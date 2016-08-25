import {Component} from '@angular/core';
import {Storage, SqlStorage, NavParams, NavController,AlertController} from 'ionic-angular';
import {TabsPage} from '../jeepney/tabs/tabs';


import {UniPage} from '../uni-page/uni-page';
// Import menu pages until here
import {DataService} from '../../services/data';
// import {Geolocation} from 'ionic-native';

// import {GoogleMapsService} from '../../providers/google-maps-service/google-maps-service';
import {GeolocationService} from '../../providers/geolocation-service/geolocation-service';


import {TranslatePipe} from '../../pipes/translate';

@Component({
  templateUrl: 'build/pages/main/main.html',
  providers: [GeolocationService],
  pipes: [TranslatePipe]

})

export class MainPage{
  static get parameters(){
    return [[DataService],[GeolocationService],[NavParams],[NavController],[AlertController]];
  }
  constructor(dataService,geolocationService,navParams,nav,alert) {
    //database service
    this.dataService = dataService;
    this.geolocationService = geolocationService;
    this.navParams = navParams;
    this.nav = nav;
    this.alert = alert;
    this.TabsPage = TabsPage;

    this.details = navParams.get('geoloc');
    console.log(this.details);

    this.geolocation2 = this.details.locationName;


  }
  ionViewDidEnter(){
    // setTimeout(function() {
      document.getElementById("lowerDiv").style.display = "inline";

    // },600);

  }

  autocomplete(searchbar){
    var me = this;
    me.geolocationService.autoComplete();
  }

  showlatlong(event) {
    var me = this;
    var geoCoords2 = {};

    document.getElementById('mainBtnLoc').style.display = "none";
    document.getElementById('mainLoaderLoc').style.display = "inline";

    console.log("geolocation working");

    navigator.geolocation.getCurrentPosition(

        (position) => {
            geoCoords2.lat = position.coords.latitude;
            geoCoords2.lng = position.coords.longitude;
            // me.geoCoords = position.coords.latitude  + ',' + position.coords.longitude;

            var gCoords = position.coords.latitude  + ',' + position.coords.longitude;
            console.log(gCoords);
             me.geolocationService.setLocationName(gCoords).then(function(locName) { // `delay` returns a promise
                // Log the value once it is resolved
             me.geolocation2 = locName;
             console.log(locName);

             if (me.geolocation2!==null) {
               document.getElementById('mainBtnLoc').style.display = "inline";
               document.getElementById('mainLoaderLoc').style.display = "none";
             }

             });
        },

        (error) => {
            console.log(error);
            me.locErrMsg();
        }, {timeout: 5000});



  }

  locErrMsg(){
    var me = this;
    let alert = me.alert.create({
      title: 'No location found',
      subTitle: 'Please enable your GPS location.',
      buttons: [{
        text: 'OK',
        handler: data => {
          this.nav.pop();
        }
      }]
    });
    alert.present();
    document.getElementById('mainBtnLoc').style.display = "inline";
    document.getElementById('mainLoaderLoc').style.display = "none";
  }

  nextPage(ctr){
    var ctr;
    var me = this;
    var latlng = me.geolocationService.getLatlng();
    console.log(me.details.locationName);
    console.log(latlng.locationName);
    //push another page onto the history stack
    //causing the nav controller to animate the new page in

    var geoloc;

    if (latlng.locationName!=undefined) {
      console.log('aaaaaaaa');
      geoloc = latlng;

    }
    else{
      console.log('bbbbbb');
      geoloc = me.details;
      console.log(geoloc);
    }

    this.nav.push( UniPage, {geoloc: geoloc, page:ctr} );

    // if(ctr == 'resto'){
    //   this.nav.push( UniPage, {geoloc: geoloc, page:ctr} );
    // }
    // else if(ctr == 'hotels'){
    //   this.nav.push( HotelsPage, {geoloc: geoloc} );
    // }
    // else if(ctr == 'malls'){
    //   this.nav.push( MallsPage, {geoloc: geoloc}  );
    // }
    // else if(ctr == 'supermarkets'){
    //   this.nav.push( SupermarketsPage, {geoloc: geoloc}  );
    // }
    // else if(ctr == 'salons'){
    //   this.nav.push( SalonsPage, {geoloc: geoloc}  );
    // }
    // else if(ctr == 'police'){
    //   this.nav.push( PolicePage, {geoloc: geoloc} );
    // }
    // else if(ctr == 'hospitals'){
    //   this.nav.push( HospitalsPage, {geoloc: geoloc} );
    // }
    // else{
    //   return;
    // }
  }

}
