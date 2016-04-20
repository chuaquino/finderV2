import {Page, Storage, SqlStorage} from 'ionic-angular';
import {TabsPage} from '../jeepney/tabs/tabs';
import {RestaurantPage} from '../restaurant/restaurant';
import {DataService} from '../../services/data';
import {Geolocation} from 'ionic-native';



@Page({
  templateUrl: 'build/pages/main/main.html'
})

export class MainPage {
  static get parameters(){
    return [[DataService]];
  }
  constructor(dataService) {
    //database service
    this.dataService = dataService;

        // this.dataService.insertJeepsData();
        //     this.dataService.insertPointsData();


    this.TabsPage = TabsPage;
    this.RestaurantPage = RestaurantPage;
  }

  showlatlong(event) {

    Geolocation.getCurrentPosition().then((resp) => {
     //resp.coords.latitude
     //resp.coords.longitude
    })

    let watch = Geolocation.watchPosition();
    watch.subscribe((data) => {
     //data.coords.latitude
     //data.coords.longitude
    })

    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML =  position.coords.latitude  + ',' + position.coords.longitude + element.innerHTML;
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    // Options: throw an error if no update is received every 30 seconds.
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { enableHighAccuracy: true });

 }

}

// Get current location with Cordova Geolocation Plugin
