import {Component} from '@angular/core';
import {NavParams, Storage, SqlStorage, NavController} from 'ionic-angular';
import {DataService} from '../../../services/data';
import {ConnectivityService} from '../../../providers/connectivity-service/connectivity-service';
import {GoogleMapsService} from '../../../providers/google-maps-service/google-maps-service';
import {LoadingModal} from '../../../components/loading-modal/loading-modal';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';
import {TranslatePipe} from '../../../pipes/translate';

@Component({
  templateUrl: 'build/pages/jeepney/jeep-routes/jeep.map.html',
  directives: [LoadingModal],
  providers: [GoogleMapsService],
  pipes: [TranslatePipe]
})

export class JeepMapsPage {
  static get parameters(){
    return [[DataService],[NavParams],[ConnectivityService],[GoogleMapsService],[NavController],[Http]];
  }
  constructor(dataService,navParams,connectivityService,googleMapsService,nav,http){

    this.nav = nav;

    this.http = http;

    this.connectivity = connectivityService;

    this.dataService = dataService;
    this.googleMapsService = googleMapsService;

    this.navParams = navParams;
    // this.jeepney = this.navParams.get('jeep');
    console.log('jeeep');
    this.jeep= this.navParams.get('jeep');

    console.log(this.jeep[0]);

    this.option = {};
    this.points = [];

    this.dataService.getPoints().then((data) => {
      if(data.res.rows.length > 0) {
        for(var i = 0; i < data.res.rows.length; i++) {


          if (this.check_marks(data.res.rows.item(i).tags,this.jeep.name)) {
            this.points.push({text: data.res.rows.item(i).text, lat: data.res.rows.item(i).lat, lng:data.res.rows.item(i).lng, tags:data.res.rows.item(i).tags, icon:data.res.rows.item(i).icon});
          }
        }
      }

    }, (error) => {
      console.log("ERROR -> " + JSON.stringify(error.err));
    });

    this.option.jeep_1 = this.jeep;
    this.option.marker_1 = this.points;


    this.map = null;
    this.mapInitialised = false;
    this.apiKey = 'AIzaSyD4zGo9cejtd83MbUFQL8YU71b8_A5XZpc';


    this.coords = null;
    this.interpolate = true;



    //fit markers to screen
    this.markers = [];

    //array for point a or display jeepney route
    this.polylines1 = [];
    this.snappedCoordinates1 = [];
    this.lineSymbol1 = null;

    //array for point b
    this.polylines2 = [];
    this.snappedCoordinates2 = [];
    this.lineSymbol2 = null;

    //array for pointc
    this.polylines3 = [];
    this.snappedCoordinates3 = [];
    this.lineSymbol3 = null;

    //array for pointd
    this.polylines4 = [];
    this.snappedCoordinates4 = [];
    this.lineSymbol4 = null;

    //this.latlng1 = coordinates for point a
    this.latlng1 = null;
    this.points1 = null;

    //this.latlng2 = coordinates for point b
    this.latlng2 = null;
    this.points2 = null;


    //latlng3 = coordinates for point c
    this.latlng3 = null;
    this.points3 = null;

    //latlng3 = coordinates for point c
    this.latlng4 = null;
    this.points4 = null;

    //color of the jeep
    this.color1 = null;

    this.marker = null;

    this.lat_array_coords1 = null;
    this.lat_array_coords2 = null;
    this.lat_array_coords3 = null;
    this.lat_array_coords4 = null;

    this.snappedPolyline1 = null;
    this.snappedPolyline2 = null;
    this.snappedPolyline3 = null;
    this.snappedPolyline4 = null;
    this.ctr1 = null;
    this.ctr2 = null;
    this.ctr3 = null;
    this.ctr4 = null;


    this.googleMapsService.loadGoogleMaps(this.option);

  }

  // loadGoogleMaps(opt){
  //
  //   var option = opt;
  //
  //   var me = this;
  //
  //   me.addConnectivityListeners();
  //
  //   if(typeof google == "undefined" || typeof google.maps == "undefined"){
  //
  //       console.log("Google maps JavaScript needs to be loaded.");
  //
  //
  //       if(me.connectivity.isOnline()){
  //           console.log("online, loading map");
  //
  //           //Load the SDK
  //           window.mapInit = function(){
  //               me.initMap(option);
  //               me.enableMap();
  //           }
  //
  //           let script = document.createElement("script");
  //           script.id = "googleMaps";
  //
  //           if(me.apiKey){
  //               script.src = 'https://maps.googleapis.com/maps/api/js?libraries=places&callback=mapInit';
  //           } else {
  //               script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
  //           }
  //
  //           document.body.appendChild(script);
  //
  //       }
  //       else {
  //         me.disableMap();
  //       }
  //   }
  //   else {
  //
  //       if(me.connectivity.isOnline()){
  //           console.log("showing map");
  //           me.initMap(option);
  //           me.enableMap();
  //       }
  //       else {
  //           console.log("disabling map");
  //           me.disableMap();
  //       }
  //
  //   }
  //
  // }
  //
  // initMap(options){
  //
  //   var me = this;
  //
  //   me.latlng1 = options.jeep_1;
  //   me.points1 = options.marker_1;
  //
  //   me.mapInitialised = true;
  //
  //   navigator.geolocation.getCurrentPosition(
  //
  //       (position) => {
  //           let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  //
  //           let mapOptions = {
  //               // center: latLng,
  //               zoom: 15,
  //               mapTypeId: google.maps.MapTypeId.ROADMAP,
  //               streetViewControl: false,
  //               mapTypeControl: false
  //           }
  //
  //           me.map = new google.maps.Map(document.getElementById("map"), mapOptions);
  //
  //           me.color1 = me.setColor(me.latlng1.color);
  //
  //           // Symbol that gets animated along the polyline
  //           me.lineSymbol1 = {
  //             path: google.maps.SymbolPath.CIRCLE,
  //             scale: 5,
  //             strokeColor: me.color1,
  //           };
  //
  //           // Create the DIV to hold the control and call the CenterControl()
  //           // constructor passing in this DIV.
  //           var centerControlDiv = document.createElement('div');
  //
  //           var colorCodeDiv = document.createElement('div');
  //           colorCodeDiv.style.border = '2px solid #fff';
  //           colorCodeDiv.style.boxShadow = '0 1px 4px -1px rgba(0,0,0,.3)';
  //           colorCodeDiv.style.padding='10px';
  //           colorCodeDiv.style.backgroundColor = 'rgb(255, 255, 255)';
  //           colorCodeDiv.style.maxWidth='100%';
  //           colorCodeDiv.style.width='100%';
  //
  //
  //           var colorHead;
  //           // if (latlng2 !==undefined){
  //           //     colorHead='Legends:';
  //           // }
  //           // else{
  //               colorHead='Legend:';
  //           // }
  //
  //           var divRow2 = document.createElement('div');
  //           divRow2.className='row';
  //           divRow2.style.padding='0px';
  //           colorCodeDiv.appendChild(divRow2);
  //
  //           var divCol2 = document.createElement('div');
  //           divCol2.className='col col-100';
  //
  //           // $translate(colorHead).then(function(title) {
  //               divCol2.innerHTML=colorHead;
  //           // });
  //           divCol2.id="title";
  //           divCol2.style.backgroundColor = 'rgb(255, 255, 255)';
  //           divCol2.style.maxWidth='100%';
  //           divCol2.style.cursor = 'pointer';
  //           divCol2.style.textAlign = 'center';
  //           divCol2.style.fontWeight = 'bold';
  //           divRow2.appendChild(divCol2);
  //
  //
  //
  //           var colorCode1b = me.setColorCode(colorCodeDiv,this.map,this.latlng1.color,this.latlng1.name)
  //
  //           colorCodeDiv.index = 1;
  //           me.map.controls[google.maps.ControlPosition.TOP_CENTER].push(colorCodeDiv);
  //
  //           google.maps.event.addListenerOnce(me.map, 'idle', function(){
  //
  //             if(me.latlng1!==null){
  //               console.log('elsee');
  //
  //               console.log(me.latlng1.coordi);
  //               me.bendAndSnap(me.latlng1.coordi,'jeep1');
  //
  //             }
  //
  //             if(me.latlng1!==null){
  //                 console.log('klk');
  //               console.log(me.points1);
  //               var point = me.points1;
  //
  //
  //
  //               me.loadMarkers(point,null);
  //             }
  //
  //             me.enableMap();
  //
  //           });
  //       },
  //
  //       (error) => {
  //           console.log(error);
  //       });
  //
  // }
  //
  // disableMap(){
  //
  //   console.log("disable map");
  // }
  //
  // enableMap(){
  //
  //   console.log("enable map");
  // }
  //
  // addConnectivityListeners(){
  //   var me = this;
  //
  //   var onOnline = function(){
  //       setTimeout(function(){
  //           if(typeof google == "undefined" || typeof google.maps == "undefined"){
  //               me.loadGoogleMaps();
  //           } else {
  //               if(!me.mapInitialised){
  //                   me.initMap(option);
  //               }
  //
  //               me.enableMap();
  //           }
  //       }, 2000);
  //   };
  //
  //   var onOffline = function(){
  //       me.disableMap();
  //   };
  //
  //   document.addEventListener('online', onOnline, false);
  //   document.addEventListener('offline', onOffline, false);
  //
  // }
  //
  // setColor(color){
  //   switch(color) {
  //     case 'Lavander':
  //       return '#8A2BE2';
  //     case 'Suntan':
  //       return '#FFFF99';
  //     case 'Orange':
  //       return '#FF4500';
  //     case 'Fire Red':
  //       return 'maroon';
  //     default:
  //       return color;
  //   }
  // }
  //
  // setColorCode(controlDiv, map,color,jname) {
  //   var divRow = document.createElement('div');
  //   divRow.style.backgroundColor = 'rgb(255, 255, 255)';
  //   divRow.style.maxWidth='100%';
  //   divRow.style.width='100%';
  //   divRow.style.textAlign = 'center';
  //   divRow.className='row';
  //   controlDiv.appendChild(divRow);
  //
  //   var divCol = document.createElement('div');
  //   divCol.style.padding='0px';
  //   divCol.className='col';
  //   divRow.appendChild(divCol);
  //
  //   var canvas = document.createElement('canvas');
  //   canvas.id = 'colorCanvas';
  //   canvas.style.height='10px';
  //   canvas.style.width='10px';
  //
  //   if(color==='White'){
  //     canvas.style.border='1px solid #000000';
  //   }
  //
  //   if(color==='#FFFF99'){
  //     canvas.style.border='1px solid #000000';
  //   }
  //
  //   canvas.style.backgroundColor=color;
  //   divCol.appendChild(canvas);
  //
  //   var text = document.createElement('span');
  //   text.innerHTML = ' '+jname;
  //   divCol.appendChild(text);
  //
  // }
  //
  // bendAndSnap(latlngs,ctr) {
  //   var me = this;
  //
  //   me.coords = latlngs;
  //
  //   //set url params
  //   let params = new URLSearchParams();
	// 	params.set('interpolate', true);
	// 	params.set('key', me.apiKey);
	// 	params.set('path', me.coords);
  //
  //   me.http.get('https://roads.googleapis.com/v1/snapToRoads',{search: params})
  //   .subscribe(
  //     data => {
  //       if(ctr == 'jeep1'){
  //         me.processSnapToRoadResponse(data.json(),'jeep1');
  //         me.drawSnappedPolyline(me.snappedCoordinates1,'jeep1');
  //       }
  //
  //       else {
  //         me.processSnapToRoadResponse(data.json(),null);
  //         me.drawSnappedPolyline(me.snappedCoordinates1,null);
  //       }
  //
  //       me.fitBounds(me.markers);
  //
  //     },
  //     err => console.log(err)
  //   );
  //
  // }
  //
  // // Parse response from snapToRoads API request
  // // Store all coordinates in response
  // // Calls functions to add markers to map for unsnapped coordinates
  // processSnapToRoadResponse(data,ctr) {
  //   var originalIndexes = [];
  //   this.snappedCoordinates1 = [];
  //   var originalIndexes2 = [];
  //   this.snappedCoordinates2 = [];
  //   var originalIndexes3 = [];
  //   this.snappedCoordinates3 = [];
  //   var originalIndexes4 = [];
  //   this.snappedCoordinates4 = [];
  //   if(ctr == 'jeep1'){
  //     console.log('process from');
  //     for (var i = 0; i < data.snappedPoints.length; i++) {
  //       var latlng1 = {
  //         'lat': data.snappedPoints[i].location.latitude,
  //         'lng': data.snappedPoints[i].location.longitude
  //       };
  //       var interpolated1 = true;
  //
  //       if (data.snappedPoints[i].originalIndex !== undefined) {
  //         interpolated1 = false;
  //         originalIndexes.push(data.snappedPoints[i].originalIndex);
  //         latlng1.originalIndex = data.snappedPoints[i].originalIndex;
  //       }
  //
  //       latlng1.interpolated = interpolated1;
  //       this.snappedCoordinates1.push(latlng1);
  //     }
  //   }
  //   if(ctr=='jeep2'){
  //     console.log('process to');
  //     for (var j = 0; j < data.snappedPoints.length; j++) {
  //       var latlng2 = {
  //         'lat': data.snappedPoints[j].location.latitude,
  //         'lng': data.snappedPoints[j].location.longitude
  //       };
  //       var interpolated2 = true;
  //
  //       if (data.snappedPoints[j].originalIndex !== undefined) {
  //         interpolated2 = false;
  //         originalIndexes.push(data.snappedPoints[j].originalIndex);
  //         latlng2.originalIndex = data.snappedPoints[j].originalIndex;
  //       }
  //
  //       latlng2.interpolated = interpolated2;
  //       this.snappedCoordinates2.push(latlng2);
  //     }
  //   }
  //   if(ctr=='jeep3'){
  //     console.log('process to');
  //     for (var k = 0; k < data.snappedPoints.length; k++) {
  //       var latlng3 = {
  //         'lat': data.snappedPoints[k].location.latitude,
  //         'lng': data.snappedPoints[k].location.longitude
  //       };
  //       var interpolated3 = true;
  //
  //       if (data.snappedPoints[k].originalIndex !== undefined) {
  //         interpolated3 = false;
  //         originalIndexes.push(data.snappedPoints[k].originalIndex);
  //         latlng3.originalIndex = data.snappedPoints[k].originalIndex;
  //       }
  //
  //       latlng3.interpolated = interpolated3;
  //       this.snappedCoordinates3.push(latlng3);
  //     }
  //   }
  //   if(ctr=='jeep4'){
  //     console.log('process to');
  //     for (var l = 0; l < data.snappedPoints.length; l++) {
  //       var latlng4 = {
  //         'lat': data.snappedPoints[l].location.latitude,
  //         'lng': data.snappedPoints[l].location.longitude
  //       };
  //       var interpolated4 = true;
  //
  //       if (data.snappedPoints[l].originalIndex !== undefined) {
  //         interpolated4 = false;
  //         originalIndexes.push(data.snappedPoints[l].originalIndex);
  //         latlng4.originalIndex = data.snappedPoints[l].originalIndex;
  //       }
  //
  //       latlng4.interpolated = interpolated4;
  //       this.snappedCoordinates4.push(latlng4);
  //       console.log(this.snappedCoordinates4);
  //     }
  //   }
  //
  // }
  //
  // // Draw the polyline for the snapToRoads API response
  // drawSnappedPolyline(snappedCoords,ctr) {
  //
  //   var me = this;
  //
  //   if(ctr =='jeep1'){
  //       console.log(snappedCoords);
  //     me.snappedPolyline1 = new google.maps.Polyline({
  //       path: snappedCoords,
  //       strokeColor: 'turquoise',
  //       strokeWeight: 5,
  //       icons: [{
  //         icon: me.lineSymbol1,
  //         offset: '100%'
  //       }]
  //     });
  //
  //     me.snappedPolyline1.setMap(me.map);
  //     me.animateCircle(me.snappedPolyline1);
  //
  //     me.polylines1.push(me.snappedPolyline1);
  //     console.log(me.polylines1);
  //     console.log('draw from');
  //   }
  //
  //   for (var i = 0; i < snappedCoords.length; i++) {
  //     var marker = me.addMarker(snappedCoords[i]);
  //   }
  //
  //
  //
  //
  // }
  //
  // //add marker for fitBounds()
  // addMarker(coords,ctr) {
  //   var me = this;
  //   var marker = new google.maps.Marker({
  //     position: coords,
  //     map: this.map,
  //   });
  //   marker.setMap(null);
  //   me.markers.push(marker);
  //
  //   return marker;
  // }
  //
  // //load markers for the landmarks
  // loadMarkers(points,points2){
  //
  //   var me = this;
  //   var records;
  //
  //   if (points2!==null) {
  //     records = [{lat:points.lat,lng:points.lng,text:points.text},{lat:points2.lat,lng:points2.lng,text:points2.text}];
  //   }
  //   else {
  //     records = points;
  //   }
  //
  //     console.log(records);
  //
  //     for (var x = 0; x < records.length; x++) {
  //       var markerPos = new google.maps.LatLng(records[x].lat,records[x].lng);
  //       var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  //       var marker = new google.maps.Marker({
  //           map: me.map,
  //           animation: google.maps.Animation.DROP,
  //           position: markerPos,
  //           icon: iconBase + 'schools_maps.png'
  //       });
  //       var infoWindowContent;
  //       if (points2!==null) {
  //         infoWindowContent = records[x].text;
  //         me.addInfoWindow(marker, infoWindowContent);
  //       }
  //       else{
  //         infoWindowContent = points[x].text;
  //         me.addInfoWindow(marker, infoWindowContent);
  //       }
  //     }
  //
  //
  //
  //
  // }
  //
  // //display info about the markers
  // addInfoWindow(marker, message) {
  //   var me = this;
  //   var point_title = "<h4>"+message+"</h4>";
  //   var infoWindow = new google.maps.InfoWindow({
  //       content: point_title
  //   });
  //   google.maps.event.addListener(marker, 'click', function () {
  //       infoWindow.open(me.map, marker);
  //   });
  //
  // }
  //
  // //Animate an icon along a polyline
  // animateCircle(polyline) {
  //   var me = this;
  //   var count = 0;
  //   var defaultIcon = [
  //     {
  //       icon: me.lineSymbol1,
  //       offset: '100%'
  //     }
  //   ];
  //
  //   window.setInterval(function() {
  //     count = (count + 0.7) % 200;
  //     var icons = polyline.get('icons') || defaultIcon;
  //     icons[0].offset = (count / 2) + '%';
  //     polyline.set('icons', icons);
  //   }, 20);
  // }
  //
  // //Fit the map bounds to the current set of markers
  // fitBounds(markers) {
  //   var me = this;
  //   console.log('Fit');
  //   console.log(markers);
  //   var bounds = new google.maps.LatLngBounds();
  //   for (var i = 0; i < markers.length; i++) {
  //     bounds.extend(markers[i].getPosition());
  //   }
  //   me.map.fitBounds(bounds);
  // }
  //
  // disableMap(){
  //   console.log("disable map");
  //   let alert = Alert.create({
  //     title: 'No connection',
  //     subTitle: 'Looks like there is a problem with your network connection. Try again later.',
  //     buttons: [{
  //       text: 'OK',
  //       handler: data => {
  //         this.nav.pop();
  //       }
  //     }]
  //   });
  //   this.nav.present(alert);
  // }
  //
  // enableMap(){
  //   console.log("enable map");
  // }
  //
  // addConnectivityListeners(){
  //   var me = this;
  //   console.log('conn');console.log(!me.mapInitialised);
  //
  //   var onOnline = function(){
  //       setTimeout(function(){
  //           if(typeof google == "undefined" || typeof google.maps == "undefined"){
  //               me.loadGoogleMaps();
  //           } else {
  //               if(!me.mapInitialised){
  //                 console.log('init');
  //                   me.initMap(option);
  //               }
  //
  //               me.enableMap();
  //           }
  //       }, 2000);
  //   };
  //
  //   var onOffline = function(){
  //
  //       me.disableMap();
  //   };
  //
  //   document.addEventListener('online', onOnline, false);
  //   document.addEventListener('offline', onOffline, false);
  //
  // }


  check_marks(tags,name){
    console.log('mappu'+document.getElementById('map'));



    var stringTags = tags;
    var index = stringTags.split(",");

    if (index.indexOf(name)!=-1) {
      return true;
    }
  }
}
