import {Storage, SqlStorage, NavController, AlertController} from 'ionic-angular';
import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';
import {DataService} from '../../services/data';
import {ConnectivityService} from '../../providers/connectivity-service/connectivity-service';

// import {LoadingModal} from '../../components/loading-modal/loading-modal';
//
// @Component({
//   templateUrl: 'build/pages/maps/maps.html',
//   directives: [LoadingModal],
// })

@Injectable()
export class GoogleMapsService {

  static get parameters(){
    return [[DataService],[ConnectivityService],[NavController],[Http],[AlertController]];
  }

  constructor(dataService,connectivityService,nav,http,alert){
    this.nav = nav;
    this.alert = alert;

    this.http = http;


    this.connectivity = connectivityService;

    this.dataService = dataService;

    this.map = null;
    this.mapInitialised = false;
    this.apiKey = 'AIzaSyD4zGo9cejtd83MbUFQL8YU71b8_A5XZpc';


    this.coords = null;
    this.interpolate = true;



    //fit markers to screen
    this.markers = [];

    //marker hide/showing
    this.markerIcon = [];

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
    this.latlng1 = undefined;
    this.points1 = undefined;

    //this.latlng2 = coordinates for point b
    this.latlng2 = undefined;
    this.points2 = undefined;


    //latlng3 = coordinates for point c
    this.latlng3 = undefined;
    this.points3 = undefined;

    //latlng3 = coordinates for point c
    this.latlng4 = undefined;
    this.points4 = undefined;

    //color of the jeep
    this.color1 = null;
    this.color2 = null;
    this.color3 = null;
    this.color4 = null;

    this.marker = null;

    this.start_new1 = undefined;
    this.start_new2 = undefined;
    this.start_new3 = undefined;
    this.start_new4 = undefined;

    this.end1Ctr = undefined;
    this.end2Ctr = undefined;
    this.end3Ctr = undefined;
    this.end4Ctr = undefined;

    this.lat_array_coords1 = null;
    this.lat_array_coords2 = null;
    this.lat_array_coords3 = null;
    this.lat_array_coords4 = null;

    this.snappedPolyline1 = null;
    this.snappedPolyline2 = null;
    this.snappedPolyline3 = null;
    this.snappedPolyline4 = null;
    this.ctr1 = undefined;
    this.ctr2 = undefined;
    this.ctr3 = undefined;
    this.ctr4 = undefined;

    this.fromId = null;
    this.toId = null;
  }


loadGoogleMaps(opt){
  console.log('enter loadGoogleMaps');
  console.log(opt.jeep_3);

    var option = opt;

    var me = this;

    me.addConnectivityListeners(opt);

    if(typeof google == "undefined" || typeof google.maps == "undefined"){

        console.log("Google maps JavaScript needs to be loaded.");


        if(me.connectivity.isOnline()){
            console.log("online, loading map");

            //Load the SDK
            window.mapInit = function(){
                me.initMap(option);
            }

            let script = document.createElement("script");
            script.id = "googleMaps";

            if(me.apiKey){
                script.src = 'https://maps.googleapis.com/maps/api/js?libraries=places&callback=mapInit';
            } else {
                script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
            }

            document.body.appendChild(script);

        }
        else {
          me.disableMap();
        }
    }
    else {

        if(me.connectivity.isOnline()){
            console.log("showing map");
            me.initMap(option);
        }
        else {
            console.log("disabling map");
            me.disableMap();
        }

    }

  }

  initMap(options){

    console.log(options);

    var me = this;

    me.fromId = options.fromId;
    me.toId = options.toId;

    // me.latlng1 = options.jeep_1;
    // me.points1 = options.marker_1;

    me.ctr1=options.ctr1;
    me.ctr2=options.ctr2;
    me.ctr3=options.ctr3;
    me.ctr4=options.ctr4;

    // console.log(ctr2);
    // console.log(options.jeep_2!==undefined);


    me.latlng1 = options.jeep_1;
    me.points1 = options.marker_1;
    // console.log(options.jeep_2!==undefined);
    // console.log(options.jeep_2);
    // console.log(options.jeep_3);
    if(me.ctr1==='1ride'&&(me.ctr2==='forth'||me.ctr2==='back')){
        // console.log(options.end1);
        me.end1Ctr = options.end1;
        // console.log(end1Ctr);
        me.points2 = options.marker_2;
    }

    else if (options.jeep_2!==undefined) {
        console.log('not undefined');
        me.latlng2 = options.jeep_2;
        console.log(me.latlng2);
        me.points2 = options.marker_2;
        me.end1Ctr = options.end1;
        me.end2Ctr = options.end2;
        console.log(options);
        console.log(options.end3);
        console.log(options.jeep_3);
        if(options.jeep_3!==undefined){
          console.log('jeep3 not unde');

            me.latlng3 = options.jeep_3;
            console.log(me.latlng3);
            me.points3 = options.marker_3;
            console.log(options.marker_3);
            console.log(me.points3);
            me.end1Ctr = options.end1;
            me.end2Ctr = options.end2;
            me.end3Ctr = options.end3;
        }
        else {
            // console.log('jeep3 undefined');
            me.latlng3 = undefined;
            me.points3 = undefined;
            me.end3Ctr = null;
        }
        if(options.jeep_4!==undefined){
          // console.log('jeep4 not unde');
            me.latlng4 = options.jeep_4;
            me.points4 = options.marker_4;
            me.end1Ctr = options.end1;
            me.end2Ctr = options.end2;
            me.end3Ctr = options.end3;
            me.end4Ctr = options.end4;
            // console.log('aa');
            // console.log(end4Ctr);
        }
        else {
            // console.log('jeep4 undefined');
            me.latlng4 = undefined;
            me.points4 = undefined;
            me.end4Ctr = null;
        }
    }
    else {
        me.latlng2 = undefined;
        me.points2 = undefined;
        me.end1Ctr = null;
        me.end2Ctr = null;


    }

    me.mapInitialised = true;

    navigator.geolocation.getCurrentPosition(

        (position) => {
            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            let mapOptions = {
                // center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true
            }
            console.log('map');
            console.log(document.getElementById("map"));
            // me.map = new google.maps.Map(document.getElementById("map"), mapOptions);
            if (me.latlng2!==undefined&&me.ctr1!==undefined&&me.ctr2!==undefined) {
                console.log('map3');
                me.map = new google.maps.Map(document.getElementById('map2'), mapOptions);

            }
            else if (me.ctr1==='1ride'&&(me.ctr2==='forth'||me.ctr2==='back')&&me.latlng2===undefined) {
                console.log('map2');
                me.map = new google.maps.Map(document.getElementById('map2'), mapOptions);

            }
            else if (me.latlng1!==undefined&&me.ctr1===undefined&&me.ctr2===undefined){
                console.log('map1');
                me.map = new google.maps.Map(document.getElementById('map1'), mapOptions);

            }
            // console.log(me.latlng2);
            me.color1 = me.setColor(me.latlng1.color);
            if(me.latlng2!==undefined){
              me.color2 = me.setColor(me.latlng2.color);
            }
            if(me.latlng3!==undefined){
              me.color3 = me.setColor(me.latlng3.color);
            }
            if(me.latlng4!==undefined){
              me.color4 = me.setColor(me.latlng4.color);
            }

            me.setLineSymbol();

            // Create the DIV to hold the control and call the CenterControl()
            // constructor passing in this DIV.
            var centerControlDiv = document.createElement('div');

            var colorCodeDiv = document.createElement('div');
            colorCodeDiv.style.border = '2px solid #fff';
            colorCodeDiv.style.boxShadow = '0 1px 4px -1px rgba(0,0,0,.3)';
            colorCodeDiv.style.padding='10px';
            colorCodeDiv.style.backgroundColor = 'rgb(255, 255, 255)';
            colorCodeDiv.style.maxWidth='100%';
            colorCodeDiv.style.width='100%';

            var trans =[{
              "Angeles City Hall": "アンヘレスシティホール",
              "Angeles Medical Center Inc.": "Angeles Medical Center Inc.",
              "Angeles University Foundation": "アンヘレスユニバーシティファウンデーション",
              "Angeles University Foundation Medical Center": "AUF メディカルセンター",
              "Anunas": "アヌナス",
              "Bancal": "バンカル",
              "Carmenville": "Carmenville",
              "Citi Center": "シティセンター",
              "City College of Angeles": "アンヘレスシティ大学",
              "Cuayan": "Cuayan",
              "Diamond Subdivision": "ダイアモンドサブディビジョン",
              "Dr. Amando L. Garcia Medical Center, Inc.": "Dr. Amando L. Garcia Medical Center, Inc.",
              "Fields Avenue": "フィールズアベニュー",
              "Friendship": "フレンドシップ",
              "Friendship Plaza": "フレンドシッププラザ",
              "Holy Angel University": "ホリーエンジェル大学",
              "Holy Family Medical Center": "ホリーファミリーメディカルセンター",
              "Holy Rosary Parish Church": "Holy Rosary Parish Church",
              "Immaculate Concepcion Parish": "イマキュレートコンセプションパリッシュ",
              "Jenra Mall": "Jenra Mall",
              "Lourdes North West": "ルーデスノースウェスト",
              "Main Gate Terminal": "メインゲートターミナル",
              "Margot": "マーゴット",
              "Marisol": "マリソル",
              "Marquee Mall": "マーキーモール",
              "Nepo Mall": "Nepo Mall",
              "Rafael Lazatin Memorial Medical Center": "ラファエルラサティンメモリアルメディカルセンター",
              "Republic Central Colleges": "リパブリックセントラルコレッジズ",
              "SM City Clark" : "SMシティクラーク",
              "Sacred Heart Medical Center": "サクレッドハートメディカルセンター",
              "Sapang Bato": "サパンベイトー",
              "Saver\'s Mall": "Saver\'s Mall",
              "Systems Plus College Foundation": "システムズプラスカレッジファウンデーション",
              "The Medical City Angeles": "ザメディカルシティ - アンヘレス",
              "Timog Park Gate 1": "チモグパークゲート1",
              "Timog Park Gate 2": "チモグパークゲート 2",
              "Timog Park Gate 3": "チモグパークゲート 3",
              "Transfer": "トランスファ",
              "Villa Sol": "Villa Sol",

              "Legend:": "凡例：",
              "Legends:": "凡例："
            }];

            if (me.latlng2 !==undefined || me.ctr1==='1ride') {
              var divRow1 = document.createElement('div');
              divRow1.className='row';
              divRow1.style.padding='0px';
              colorCodeDiv.appendChild(divRow1);

              var divCol1 = document.createElement('div');
              divCol1.className='col col-100';
              var from = me.fromId;
              var to = me.toId;

              var index = {};


              // // $translate(from).then(function(title1) {
              //     index.from=from;
              // //     return $translate(to);
              // // }).then(function(title2) {
              //     index.to=to;
              //     divCol1.innerHTML = index.from+" - "+index.to;
              // // });

              if (from) {
                if (navigator.language.split('-')[0]=='ja') {
                  index.from = trans[0][from];
                }
                else {
                  index.from = from;
                }

              }
              if (to) {
                if (navigator.language.split('-')[0]=='ja') {
                  index.to = trans[0][to];
                }
                else {
                  index.to = to;
                }
              }

              divCol1.innerHTML = index.from+" - "+index.to;

              console.log(index);
              divCol1.style.backgroundColor = 'rgb(255, 255, 255)';
              divCol1.style.maxWidth='100%';
              divCol1.style.cursor = 'pointer';
              divCol1.style.textAlign = 'center';
              divCol1.style.fontWeight = 'bold';
              divRow1.appendChild(divCol1);


            }


            var colorHead;
            if (me.latlng2 !==undefined){
                colorHead='Legends:';
            }
            else{
                colorHead='Legend:';
            }

            var divRow2 = document.createElement('div');
            divRow2.className='row';
            divRow2.style.padding='0px';
            colorCodeDiv.appendChild(divRow2);



            var divCol2 = document.createElement('div');
            divCol2.className='col col-100';

            if (colorHead) {
              if (navigator.language.split('-')[0]=='ja') {
                divCol2.innerHTML = trans[0][colorHead];
              }
              else {
                divCol2.innerHTML = colorHead;
              }

            }

            // // $translate(colorHead).then(function(title) {
            //     divCol2.innerHTML=colorHead;
            // // });
            divCol2.id="title";
            divCol2.style.backgroundColor = 'rgb(255, 255, 255)';
            divCol2.style.maxWidth='100%';
            divCol2.style.cursor = 'pointer';
            divCol2.style.textAlign = 'center';
            divCol2.style.fontWeight = 'bold';
            divRow2.appendChild(divCol2);



            // var colorCode1b = me.setColorCode(colorCodeDiv,this.map,this.latlng1.color,this.latlng1.name)

            colorCodeDiv.index = 1;
            colorCodeDiv.style.display = 'none';
            me.map.controls[google.maps.ControlPosition.TOP_LEFT].push(colorCodeDiv);


            var legBtn1 = document.getElementById('info1');
            var legBtn2 = document.getElementById('info2');
            var locMarkerBtn1 = document.getElementById('locMarker1');
            var locMarkerBtn2 = document.getElementById('locMarker2');
            var legMarkDiv1 = document.getElementById('legend0');
            var legMarkDiv2 = document.getElementById('legend1');


            // if (document.getElementById('legend0')!==null&&me.map!==null) {
            //   console.log('leg1');
            //   legMarkDiv1 = document.getElementById('legend0');
            //   legMarkDiv1.style.display = 'none';
            //
            // }
            //
            // if (document.getElementById('legend1')!==null) {
            //   legMarkDiv2 = document.getElementById('legend1');
            //   legMarkDiv2.style.display = 'none';
            //
            // }



            //fab button for displaying legends
            if (me.latlng2!==undefined||(me.latlng1!==undefined&&me.ctr1==='1ride')) {
              me.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legBtn2);
              legBtn2.style.display = "inline";

              me.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(locMarkerBtn2);
              locMarkerBtn2.style.display = "inline";

              me.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legMarkDiv2);

              legBtn2.style.marginRight = '16px';
              legBtn2.style.marginBottom = '16px';
              locMarkerBtn2.style.marginRight = '16px';

              var ctr3;

              legBtn2.addEventListener('click', function() {
                if (ctr3 == false) {
                  colorCodeDiv.style.display = 'none';
                  legMarkDiv2.style.display = 'none';
                  ctr3 = true;
                }
                else {
                  colorCodeDiv.style.display = 'inline';
                  legMarkDiv2.style.display = 'inline';

                  var points = {};

                  if(me.points1 !==undefined && me.points2 !==undefined && me.points3 === undefined){
                    points[0] = me.points1.icon;
                    points[1] = me.points2.icon;
                  }
                  else if(me.points1 !==undefined && me.points2 !==undefined && me.points3 !== undefined && me.points4 === undefined){
                    points[0] = me.points1.icon;
                    points[1] = me.points3.icon;
                  }
                  else if(me.points1 !==undefined && me.points2 !==undefined && me.points3 !== undefined && me.points4 !== undefined){
                    points[0] = me.points1.icon;
                    points[1] = me.points4.icon;
                  }

                  for (var i = 0; i < 2; i++) {
                    me.displayLegMark(points[i]);
                    console.log(points[i]);
                  }

                  ctr3 = false;
                }


              });

              var ctr4;


              locMarkerBtn2.addEventListener('click', function() {
                if (ctr4 == false) {
                  me.clearMarkers();
                  ctr4 = true;
                }
                else {
                  me.setMapOnAll(me.map);
                  ctr4 = false;
                }
              });
            }
            else {
              me.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legBtn1);
              legBtn1.style.display = "inline";

              me.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(locMarkerBtn1);
              locMarkerBtn1.style.display = "inline";

              me.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legMarkDiv1);
              legMarkDiv1.style.marginBottom = '5px';

              legBtn1.style.marginRight = '16px';
              legBtn1.style.marginBottom = '16px';
              locMarkerBtn1.style.marginRight = '16px';

              var ctr;

              legBtn1.addEventListener('click', function() {
                if (ctr == false) {
                  colorCodeDiv.style.display = 'none';
                  legMarkDiv1.style.display = 'none';
                  ctr = true;
                }
                else {
                  colorCodeDiv.style.display = 'inline';
                  legMarkDiv1.style.display = 'inline';
                  for (var i = 0; i < me.points1.length; i++) {
                    me.displayLegMark(me.points1[i].icon);
                    console.log(me.points1[i].icon);
                  }
                  ctr = false;
                }

              });

              var ctr2;

              locMarkerBtn1.addEventListener('click', function() {
                if (ctr2 == false) {
                  me.clearMarkers();
                  ctr2 = true;
                }
                else {
                  me.setMapOnAll(me.map);
                  ctr2 = false;
                }
              });


            }





            google.maps.event.addListenerOnce(me.map, 'idle', function(){

              if (me.latlng2!==undefined&&me.ctr1!==undefined&&me.ctr2!==undefined) {

                  // console.log('enter latlang2');
                  // console.log(latlng2.coordi);
                var a = me.getStartEnd(me.latlng1.coordi,'jeep1');
                var b = me.getStartEnd(me.latlng2.coordi,'jeep2');
                if (me.latlng3 !==undefined){
                  console.log('jeep3');
                    var c = me.getStartEnd(me.latlng3.coordi,'jeep3');
                }
                if (me.latlng4 !==undefined){
                  console.log('jeep4');
                    var d = me.getStartEnd(me.latlng4.coordi,'jeep4');
                }

                var colorCode1b = me.setColorCode(colorCodeDiv,me.map,me.color1,me.latlng1.name);
                if (me.start_new2!==undefined) {
                    var colorCode2b = me.setColorCode(colorCodeDiv,me.map,me.color2,me.latlng2.name);
                }

                if(me.latlng3 !==undefined){
                    var colorCode3b = me.setColorCode(colorCodeDiv,me.map,me.color3,me.latlng3.name);
                }

                if(me.latlng4 !==undefined){
                    var colorCode4b = me.setColorCode(colorCodeDiv,me.map,me.color4,me.latlng4.name);
                }
                me.bendAndSnap(me.start_new1,'jeep1');
                console.log('bend1');
                if(me.start_new2!==undefined){
                  me.bendAndSnap(me.start_new2,'jeep2');
                  console.log('bend2');
                }
                console.log(me.start_new3);
                if(me.start_new3!==undefined){
                  console.log('bend 3');
                  console.log(me.start_new3);
                  me.bendAndSnap(me.start_new3,'jeep3');
                }
                if(me.start_new4!==undefined){
                  console.log('bend 4');
                  console.log(me.start_new4);
                  me.bendAndSnap(me.start_new4,'jeep4');
                }
              }
              else if (me.ctr1==='1ride'&&(me.ctr2==='forth'||me.ctr2==='back')&&me.latlng2===undefined){
                  var colorCode1bif = new me.setColorCode(colorCodeDiv,me.map,me.color1,me.latlng1.name);
                  var ride = me.getStartEnd(me.latlng1.coordi,'jeep1');
                  // console.log(latlng1.coordi);
                  console.log('1ride if');
                  // console.log(start_new1);
                  me.bendAndSnap(me.start_new1,'jeep1');
              }
              else{
                console.log('this.latlng1.name');
                console.log(me.latlng1);
                  var colorCode1a = me.setColorCode(colorCodeDiv,me.map,me.color1,me.latlng1.name);
                  me.bendAndSnap(me.latlng1.coordi,'jeep1');

              }


              if(me.points1 !==undefined && me.points2 !==undefined && me.points3 === undefined){
                me.loadMarkers(me.points1,me.points2);

                console.log('loadmarkers2');
              }
              else if(me.points1 !==undefined && me.points2 !==undefined && me.points3 !== undefined && me.points4 === undefined){
                me.loadMarkers(me.points1,me.points3);

                console.log('loadmarkers3');
              }
              else if(me.points1 !==undefined && me.points2 !==undefined && me.points3 !== undefined && me.points4 !== undefined){
                me.loadMarkers(me.points1,me.points4);

                console.log('loadmarkers4');
              }
              else if (me.ctr1==='1ride'&&(me.ctr2==='forth'||me.ctr2==='back')&&me.latlng2===undefined) {
                  console.log('1ride ctr');
                  me.loadMarkers(points1,null);
              }
              else{
                var point = me.points1;
                me.loadMarkers(point,null);
              }

            });
        },

        (error) => {
            console.log(error);
            me.locErrMsg();
        });

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
  }

  displayLegMark(mark){
    var ctr;
    if (document.getElementById('legend0')!=null) {
      ctr=0;
    }

    if (document.getElementById('legend1')!=null) {
      ctr=1;
    }

    console.log(mark=='img/pins/cityhall.png');

    if (mark=='img/pins/church.png') {
      document.getElementById('church'+ctr).style.display = 'block';
    }
    else if (mark=='img/pins/cityhall.png') {
      console.log('cityhall');
      document.getElementById('cityhall'+ctr).style.display = 'block';
    }
    else if (mark=='img/pins/hospital.png') {
      console.log('hosp');
      document.getElementById('hospital'+ctr).style.display = 'block';
    }
    else if (mark=='img/pins/mall.png') {
      document.getElementById('mall'+ctr).style.display = 'block';
    }
    else if (mark=='img/pins/school.png') {
      document.getElementById('school'+ctr).style.display = 'block';
    }
    else if (mark=='img/pins/subd_brgy.png') {
      document.getElementById('subd_brgy'+ctr).style.display = 'block';
    }
    else if (mark=='img/pins/terminal.png') {
      document.getElementById('terminal'+ctr).style.display = 'block';
    }
  }

  setLineSymbol(){
    var me = this;
    var path = 'M45.851,12.498v6.289h0.813v1.146h-1.487V18.19h-3.032V3.866H7.484V18.19H4.451v1.742H2.965v-1.146h0.812v-6.289H0.53 v6.289h0.812v2.827h3.11v17.682h2.716v6.385h8.118v-6.385h19.056v6.385h8.119v-6.385h2.715V21.613h3.11v-2.827h0.813v-6.289 H45.851z M11.231,28.743c-1.556,0-2.818-1.311-2.818-2.925c0-1.61,1.262-2.918,2.818-2.918c1.561,0,2.822,1.309,2.822,2.918 C14.053,27.433,12.792,28.743,11.231,28.743z M18.942,34.71h-1.625V22.772h1.625V34.71z M23.093,34.71H21.47V22.772h1.624V34.71z M27.256,34.71h-1.624V22.772h1.624V34.71z M27.925,18.19H10.731V7.228h28.164V18.19h-0.826c0.021-0.185,0.056-0.37,0.056-0.561 c0-2.927-2.301-5.309-5.128-5.309s-5.128,2.382-5.128,5.309C27.869,17.823,27.902,18.005,27.925,18.19z M31.41,34.71h-1.624 V22.772h1.624V34.71z M29.549,18.19c-0.029-0.184-0.056-0.37-0.056-0.561c0-2,1.57-3.628,3.504-3.628s3.505,1.628,3.505,3.628 c0,0.193-0.027,0.379-0.057,0.561H29.549z M38.394,28.743c-1.558,0-2.82-1.311-2.82-2.925c0-1.61,1.263-2.918,2.82-2.918 c1.559,0,2.822,1.309,2.822,2.918C41.219,27.433,39.952,28.743,38.394,28.743z'

    console.log("color"+me.color1);
    console.log(me.color1=='White'||me.color1=='#FFFF99'||me.color1=='Yellow');
    var strokeWeight1 = 0;
    var strokeColor1 = null;
    var strokeWeight2 = 0;
    var strokeColor2 = null;
    var strokeWeight3 = 0;
    var strokeColor3 = null;
    var strokeWeight4 = 0;
    var strokeColor4 = null;

    if(me.color1=='White'||me.color1=='#FFFF99'||me.color1=='Yellow'){
      strokeWeight1 = 1;
      strokeColor1 = '#000000';
    }

    if(me.color2=='White'||me.color2=='#FFFF99'||me.color2=='Yellow'){
      strokeWeight2 = 1;
      strokeColor2 = '#000000';
    }

    if(me.color3=='White'||me.color3=='#FFFF99'||me.color3=='Yellow'){
      strokeWeight3 = 1;
      strokeColor3 = '#000000';
    }

    if(me.color4=='White'||me.color4=='#FFFF99'||me.color4=='Yellow'){
      strokeWeight4 = 1;
      strokeColor4 = '#000000';
    }

    // Symbol that gets animated along the polyline
    me.lineSymbol1 = {
      path: path,
      fillColor: me.color1,
      fillOpacity: 1,
      strokeWeight: strokeWeight1,
      strokeColor: strokeColor1,
      anchor: new google.maps.Point(27.433,27.433),
      scale: .50,
    };

    // Symbol that gets animated along the polyline
    me.lineSymbol2 = {
      path: path,
      fillColor: me.color2,
      fillOpacity: 1,
      strokeWeight: strokeWeight2,
      strokeColor: strokeColor2,
      anchor: new google.maps.Point(27.433,27.433),
      scale: .50,
    };
    // Symbol that gets animated along the polyline
    me.lineSymbol3 = {
      path: path,
      fillColor: me.color3,
      fillOpacity: 1,
      strokeWeight: strokeWeight3,
      strokeColor: strokeColor3,
      anchor: new google.maps.Point(27.433,27.433),
      scale: .50,
    };
    // Symbol that gets animated along the polyline
    me.lineSymbol4 = {
      path: path,
      fillColor: me.color4,
      fillOpacity: 1,
      strokeWeight: strokeWeight4,
      strokeColor: strokeColor4,
      anchor: new google.maps.Point(27.433,27.433),
      scale: .50,
    };
  }

  //listener when online or offline
  addConnectivityListeners(option){
    var me = this;

    var onOnline = () =>{
        setTimeout(function(){
            if(typeof google == "undefined" || typeof google.maps == "undefined"){
                me.loadGoogleMaps(option);
            } else {
                if(!me.mapInitialised){
                    me.initMap(option);
                }
            }
        }, 2000);
    };

    var onOffline = () =>{
        me.disableMap();
    };

    document.addEventListener('online', onOnline, false);
    document.addEventListener('offline', onOffline, false);

  }

  setColor(color){
    switch(color) {
      case 'Lavander':
        return '#8A2BE2';
      case 'Suntan':
        return '#FFFF99';
      case 'Orange':
        return '#FF4500';
      case 'Fire Red':
        return 'maroon';
      default:
        return color;
    }
  }

  setColorCode(controlDiv, map,color,jname) {
    var divRow = document.createElement('div');
    divRow.style.backgroundColor = 'rgb(255, 255, 255)';
    divRow.style.maxWidth='100%';
    divRow.style.width='100%';
    divRow.style.textAlign = 'center';
    divRow.className='row';
    controlDiv.appendChild(divRow);

    var divCol = document.createElement('div');
    divCol.style.padding='0px';
    divCol.className='col';
    divRow.appendChild(divCol);

    var canvas = document.createElement('canvas');
    canvas.id = 'colorCanvas';
    canvas.style.height='10px';
    canvas.style.width='10px';

    if(color==='White'){
      canvas.style.border='1px solid #000000';
    }

    if(color==='#FFFF99'){
      canvas.style.border='1px solid #000000';
    }

    if(color==='Yellow'){
      canvas.style.border='1px solid #000000';
    }


    canvas.style.backgroundColor=color;
    divCol.appendChild(canvas);

    var transJeep =[{
      "CHECK-POINT-HOLY": "チェック-ポイント- ホーリーハイー",
      "CHECK-POINT-HOLY-HI-WAY": "チェック-ポイント- ホーリーハイー-ウェイ",
      "CHECK-POINT-HENSONVILLE-HOLY":"チェック-ポイント-ヘンソンヴィル-ホーリー",
      "PANDAN-PAMPANG":"パンダン-パンパング",
      "MAINGATE-FRIENDSHIP":"メインゲート-フレンドシップ",
      "MARISOL-PAMPANG":"マリソル-パンパング",
      "PAMPANG-HOLY":"パンパング-ホーリー",
      "PLARIDEL-CAPAYA":"プラリデル-カパヤ",
      "SUNSET-NEPO":"スンセト-ネポ",
      "VILLA-PAMPANG":"ビラ-パンパング",
      "SAPANG BATO-ANGELES":"サパングバトバト-アンヘレス",
      "Walk through":"通り抜ける"
    }];

    var text = document.createElement('span');
    text.innerHTML = ' '+transJeep[0][jname];
    divCol.appendChild(text);

  }

  getStartEnd(startEnd,ctr){
    var me = this;
      // console.log(points1);
    if(ctr === 'jeep1'){
      console.log('enter from');
      var string1 = startEnd;
      me.lat_array_coords1 = string1.split("|");
      // console.log(end1Ctr);
      // console.log(lat_array_coords1);
      // console.log($stateParams.toId);
      // console.log(points1.lat+","+points1.lng);

      var startCtr1;
      var endCtr1;

      // if (ctr1==='1ride') {
      //   console.log('1ride iffff');
      //   startCtr1 = getStartPoints(end1Ctr,lat_array_coords1,ctr);
      //   endCtr1 = getEndPoints(points1.lat+","+points1.lng,lat_array_coords1,ctr);
      // }
      // else {
        startCtr1 = me.getStartPoints(me.points1.lat+","+me.points1.lng,me.lat_array_coords1,ctr);
        endCtr1 = me.getEndPoints(me.end1Ctr,me.lat_array_coords1,ctr);
      // }

      // console.log(me.points1.lat+","+me.points1.lng);
      // console.log(end1Ctr);
      // console.log(lat_array_coords1);
      //
      // console.log(startCtr1);
      // console.log(endCtr1);


      me.start_new1 = me.lat_array_coords1[startCtr1];
      // console.log(start_new1);
      // console.log(ctr1);
      // console.log(startCtr1>endCtr1);
      if (startCtr1>endCtr1) {
        // console.log('1a');
        // console.log((ctr1==='1ride'&&ctr2==='forth'));
        //   console.log(start_new1);
        for (var j = startCtr1-1; j >= endCtr1; j--) {
            me.start_new1 += "|"+me.lat_array_coords1[j];
        }
        if (ctr1==='1ride') {
          console.log('reverse');
          me.start_new1 = me.start_new1.split("|").reverse().join("|");
        }
        console.log(me.start_new1);

      }
      else {
        console.log('2a');
          for (var i = startCtr1+1; i <= endCtr1; i++) {
              me.start_new1 += "|"+me.lat_array_coords1[i];
          }
          // if (ctr1==='1ride'&&ctr2==='back'&&(latlng1.name!=='CHECK-POINT-HOLY'||latlng1.name!=='CHECK-POINT-HOLY-HI-WAY'||latlng1.name!=='MARISOL-PAMPANG'||latlng1.name!=='PANDAN-PAMPANG')) {
          //   console.log('rev2');
          //   start_new1.split("|").reverse().join("|");
          // }


      }
      console.log(me.start_new1);
    }
    if(ctr === 'jeep2'){
      console.log('enter from');
      // console.log(points2);
      var string2 = startEnd;
      me.lat_array_coords2 = string2.split("|");

      console.log(me.points2.lat+","+me.points2.lng);
      // console.log(end2Ctr);
      console.log(me.lat_array_coords2);
      var startCtr2 = me.getStartPoints(me.points2.lat+","+me.points2.lng,me.lat_array_coords2,ctr);
      var endCtr2 = me.getEndPoints(me.end2Ctr,me.lat_array_coords2,ctr);

      console.log('jepp2');
      // console.log(startCtr2);
      // console.log(endCtr2);
      me.start_new2 = me.lat_array_coords2[startCtr2];
      console.log(me.start_new2);
      // console.log(ctr2);
    //   if (ctr2=='forth') {
    //       console.log('enter ctr2');

        if (startCtr2>endCtr2) {
          console.log('123');
            for (var l = startCtr2-1; l >= endCtr2; l--) {
                me.start_new2 += "|"+me.lat_array_coords2[l];
            }
            me.start_new2 = me.start_new2.split("|").reverse().join("|");
        }
        else {
          console.log('456');
            for (var k = startCtr2+1; k <= endCtr2; k++) {
                me.start_new2 += "|"+me.lat_array_coords2[k];
                console.log(me.start_new2);
            }

        }
        console.log(me.start_new2);




      }
      if(ctr === 'jeep3'){
        console.log('enter mid3');
        console.log(me.points3);
        // console.log(points3);
        var string3 = startEnd;
        me.lat_array_coords3 = string3.split("|");

        // console.log(points3.lat+","+points3.lng);
        // console.log(end3Ctr);
        // console.log(lat_array_coords3);
        var startCtr3 = me.getStartPoints(me.points3.lat+","+me.points3.lng,me.lat_array_coords3,ctr);
        var endCtr3 = me.getEndPoints(me.end3Ctr,me.lat_array_coords3,ctr);
        // console.log(startCtr3);
        // console.log(endCtr3);
        //

        me.start_new3 = me.lat_array_coords3[startCtr3];
        // console.log(start_new3);
        if (startCtr3<endCtr3 && me.start_new3!==undefined) {
          console.log('enter 3if1');
          for (var m = startCtr3+1; m <= endCtr3; m++) {
              me.start_new3 += "|"+me.lat_array_coords3[m];
          }
          // start_new3 = start_new3.split("|").reverse().join("|");
          console.log(me.start_new3);
        }
        else if (startCtr3>endCtr3 && me.start_new3!==undefined){
          console.log('enter 3if3');
          for (var n = startCtr3-1; n >= endCtr3; n--) {
              me.start_new3 += "|"+me.lat_array_coords3[n];
          }
          me.start_new3 = me.start_new3.split("|").reverse().join("|");

          // console.log('33a');
          console.log(me.start_new3);
        }
      }
      if(ctr === 'jeep4'){
        // console.log('enter mid4');
        // console.log(points4);
        var string4 = startEnd;
        me.lat_array_coords4 = string4.split("|");

        // console.log(points4.lat+","+points4.lng);
        // console.log(end4Ctr);
        // console.log(lat_array_coords4);
        var startCtr4 = me.getStartPoints(me.points4.lat+","+me.points4.lng,me.lat_array_coords4,ctr);
        var endCtr4 = me.getEndPoints(me.end4Ctr,me.lat_array_coords4,ctr);
        // console.log(startCtr4);
        // console.log(endCtr4);


        me.start_new4 = me.lat_array_coords4[startCtr4];

        if (startCtr4<endCtr4 && me.start_new4!==undefined) {
          console.log('enter 4if1');
          for (var o = startCtr4+1; o <= endCtr4; o++) {
              me.start_new4 += "|"+me.lat_array_coords4[o];
          }
          // start_new4 = start_new4.split("|").reverse().join("|");
          console.log(me.start_new4);
        }
        else if (startCtr4>endCtr4 && me.start_new4!==undefined){
          console.log('enter 4if4');
          for (var p = startCtr4-1; p >= endCtr4; p--) {
              me.start_new4 += "|"+me.lat_array_coords4[p];
          }
          me.start_new4 = me.start_new4.split("|").reverse().join("|");


          console.log(me.start_new4);
        }
        console.log('ccc');
        console.log(me.start_new4);
      }


  }

  //match the selected start point to the start point array
  getStartPoints(startpoint,ctr,jeepNo){
    var me = this;
    // console.log(ctr1);
    // console.log(ctr2);
    // console.log(jeepNo);
    // console.log((ctr2==='forth'||ctr2==='back'));
    // if (latlng3===undefined) {
      console.log('undefined');
      // console.log(ctr1);
      // console.log(ctr2);
      if ((me.ctr1=='1ride'&&me.ctr2=='forth'&&jeepNo==='jeep1')||(me.ctr1=='forth'&&jeepNo==='jeep1')||(me.ctr2=='forth'&&jeepNo==='jeep2')||(me.ctr3=='forth'&&jeepNo==='jeep3')||(me.ctr4=='forth'&&jeepNo==='jeep4')) {
        console.log('start index of');
        console.log(ctr.indexOf(startpoint));
        return ctr.indexOf(startpoint);
      }
      else if((me.ctr1=='1ride'&&me.ctr2=='back'&&jeepNo==='jeep1')||(me.ctr1=='back'&&jeepNo==='jeep1')||(me.ctr2=='back'&&jeepNo==='jeep2')||(me.ctr3=='back'&&jeepNo==='jeep3')||(ctr4=='back'&&jeepNo==='jeep4')){

        console.log('lat3 unde');
          console.log('start last index');
          // console.log(ctr);
          // console.log(startpoint);
          // console.log(ctr.lastIndexOf(startpoint));
          return ctr.lastIndexOf(startpoint);
      }
  }

  //match the selected end point to the end point array
  getEndPoints(endpoint,ctr,jeepNo){
    var me = this;

    // console.log(endpoint);
    // console.log(ctr);
    // console.log(ctr1);
    // console.log(ctr1=='back'||ctr2=='back'||ctr3=='back');
    // console.log(ctr1=='forth'||ctr2=='forth'||ctr3=='forth');

    // if (latlng3===undefined) {
      if((me.ctr1=='1ride'&&me.ctr2=='forth'&&jeepNo==='jeep1')||(me.ctr1=='forth'&&jeepNo==='jeep1')||(me.ctr2=='forth'&&jeepNo==='jeep2')||(me.ctr3=='forth'&&jeepNo==='jeep3')||(me.ctr4=='forth'&&jeepNo==='jeep4')) {
        console.log('end index of');
        console.log(ctr.indexOf(endpoint));
        return ctr.indexOf(endpoint);
      }
      if((me.ctr1=='1ride'&&me.ctr2=='back'&&jeepNo==='jeep1')||(me.ctr1=='back'&&jeepNo==='jeep1')||(me.ctr2=='back'&&jeepNo==='jeep2')||(me.ctr3=='back'&&jeepNo==='jeep3')||(me.ctr4=='back'&&jeepNo==='jeep4')){
          console.log('end last index');
          console.log(me.ctr);
          console.log(endpoint);
          console.log(ctr.lastIndexOf(endpoint));
          console.log(ctr.lastIndexOf(endpoint));
          return ctr.lastIndexOf(endpoint);
      }
    // }
    // else if (latlng3!==undefined) {
      // if ((ctr1=='1ride'&&ctr2=='forth'&&jeepNo==='jeep1')||(ctr1=='forth'&&jeepNo==='jeep1')||(ctr2=='forth'&&jeepNo==='jeep2')||(ctr3=='forth'&&jeepNo==='jeep3')) {
      //   console.log('end last index');
      //   console.log(ctr);
      //   console.log(endpoint);
      //   console.log(ctr.lastIndexOf(endpoint));
      //   console.log(ctr.lastIndexOf(endpoint));
      //   return ctr.lastIndexOf(endpoint);
      // }
      // else if((ctr1=='1ride'&&ctr2=='back'&&jeepNo==='jeep1')||(ctr1=='back'&&jeepNo==='jeep1')||(ctr2=='back'&&jeepNo==='jeep2')||(ctr3=='back'&&jeepNo==='jeep3')){
      //   console.log('end index of');
      //   console.log(ctr.indexOf(endpoint));
      //   return ctr.indexOf(endpoint);
      // }
    // }


  }

  bendAndSnap(latlngs,ctr) {
    var me = this;

    me.coords = latlngs;

    //set url params
    let params = new URLSearchParams();
    params.set('interpolate', true);
    params.set('key', me.apiKey);
    params.set('path', me.coords);

    me.http.get('https://roads.googleapis.com/v1/snapToRoads',{search: params})
    .subscribe(
      data => {
        if(ctr == 'jeep1'){
          me.processSnapToRoadResponse(data.json(),'jeep1');
          me.drawSnappedPolyline(me.snappedCoordinates1,'jeep1');
        }

        if(ctr=='jeep2'){
          me.processSnapToRoadResponse(data.json(),'jeep2');
          me.drawSnappedPolyline(me.snappedCoordinates2,'jeep2');
        }


        if(ctr=='jeep3'){
          me.processSnapToRoadResponse(data.json(),'jeep3');
          me.drawSnappedPolyline(me.snappedCoordinates3,'jeep3');
        }


        if(ctr=='jeep4'){
          me.processSnapToRoadResponse(data.json(),'jeep4');
          me.drawSnappedPolyline(me.snappedCoordinates4,'jeep4');
        }

        else {
            console.log('default');
          me.processSnapToRoadResponse(data.json(),null);
          me.drawSnappedPolyline(me.snappedCoordinates1,null);
        }

        me.fitBounds(me.markers);

      },
      err => console.log(err)
    );

  }

  // Parse response from snapToRoads API request
  // Store all coordinates in response
  // Calls functions to add markers to map for unsnapped coordinates
  processSnapToRoadResponse(data,ctr) {
    var me = this;
    var originalIndexes = [];
    me.snappedCoordinates1 = [];
    var originalIndexes2 = [];
    me.snappedCoordinates2 = [];
    var originalIndexes3 = [];
    me.snappedCoordinates3 = [];
    var originalIndexes4 = [];
    me.snappedCoordinates4 = [];
    if(ctr == 'jeep1'){
      console.log('process from');
      for (var i = 0; i < data.snappedPoints.length; i++) {
        var latlng1 = {
          'lat': data.snappedPoints[i].location.latitude,
          'lng': data.snappedPoints[i].location.longitude
        };
        var interpolated1 = true;

        if (data.snappedPoints[i].originalIndex !== undefined) {
          interpolated1 = false;
          originalIndexes.push(data.snappedPoints[i].originalIndex);
          latlng1.originalIndex = data.snappedPoints[i].originalIndex;
        }

        latlng1.interpolated = interpolated1;
        me.snappedCoordinates1.push(latlng1);
      }
    }
    if(ctr=='jeep2'){
      console.log('process to');
      for (var j = 0; j < data.snappedPoints.length; j++) {
        var latlng2 = {
          'lat': data.snappedPoints[j].location.latitude,
          'lng': data.snappedPoints[j].location.longitude
        };
        var interpolated2 = true;

        if (data.snappedPoints[j].originalIndex !== undefined) {
          interpolated2 = false;
          originalIndexes.push(data.snappedPoints[j].originalIndex);
          latlng2.originalIndex = data.snappedPoints[j].originalIndex;
        }

        latlng2.interpolated = interpolated2;
        me.snappedCoordinates2.push(latlng2);
      }
    }
    if(ctr=='jeep3'){
      console.log('process to');
      for (var k = 0; k < data.snappedPoints.length; k++) {
        var latlng3 = {
          'lat': data.snappedPoints[k].location.latitude,
          'lng': data.snappedPoints[k].location.longitude
        };
        var interpolated3 = true;

        if (data.snappedPoints[k].originalIndex !== undefined) {
          interpolated3 = false;
          originalIndexes.push(data.snappedPoints[k].originalIndex);
          latlng3.originalIndex = data.snappedPoints[k].originalIndex;
        }

        latlng3.interpolated = interpolated3;
        me.snappedCoordinates3.push(latlng3);
      }
    }
    if(ctr=='jeep4'){
      console.log('process to');
      for (var l = 0; l < data.snappedPoints.length; l++) {
        var latlng4 = {
          'lat': data.snappedPoints[l].location.latitude,
          'lng': data.snappedPoints[l].location.longitude
        };
        var interpolated4 = true;

        if (data.snappedPoints[l].originalIndex !== undefined) {
          interpolated4 = false;
          originalIndexes.push(data.snappedPoints[l].originalIndex);
          latlng4.originalIndex = data.snappedPoints[l].originalIndex;
        }

        latlng4.interpolated = interpolated4;
        me.snappedCoordinates4.push(latlng4);
        console.log(me.snappedCoordinates4);
      }
    }

  }

  // Draw the polyline for the snapToRoads API response
  drawSnappedPolyline(snappedCoords,ctr) {

    var me = this;

    if(ctr =='jeep1'){
        console.log(snappedCoords);
      me.snappedPolyline1 = new google.maps.Polyline({
        path: snappedCoords,
        strokeColor: 'turquoise',
        strokeWeight: 5,
        icons: [{
          icon: me.lineSymbol1,
          offset: '100%',
          fixedRotation:true
        }]
      });

      me.snappedPolyline1.setMap(me.map);
      me.animateCircle(me.snappedPolyline1);

      me.polylines1.push(me.snappedPolyline1);
      console.log(me.polylines1);
      console.log('draw from');
    }
    if(ctr=='jeep2'){
      console.log('draw to');
      console.log(snappedCoords);
      me.snappedPolyline2 = new google.maps.Polyline({
        path: snappedCoords,
        strokeColor: '#FF69B4',
        strokeWeight: 5,
        icons: [{
          icon: me.lineSymbol2,
          offset: '100%',
          fixedRotation:true
        }]
      });

      me.snappedPolyline2.setMap(me.map);
      me.animateCircle(me.snappedPolyline2);

      me.polylines2.push(me.snappedPolyline2);
      console.log(me.polylines2);
    }

    for (var i = 0; i < snappedCoords.length; i++) {
      var marker = me.addMarker(snappedCoords[i]);
    }

    if(ctr=='jeep3'){
      console.log('draw mid');
      console.log(me.snappedCoords);
      me.snappedPolyline3 = new google.maps.Polyline({
        path: snappedCoords,
        strokeColor: '#98FB98',
        strokeWeight: 5,
        icons: [{
          icon: me.lineSymbol3,
          offset: '100%',
          fixedRotation:true
        }]
      });

      me.snappedPolyline3.setMap(me.map);
      me.animateCircle(me.snappedPolyline3);

      me.polylines3.push(me.snappedPolyline3);
      console.log(me.polylines3);
    }
    if(ctr=='jeep4'){
      console.log('draw 4');
      console.log(me.snappedCoords);
      me.snappedPolyline4 = new google.maps.Polyline({
        path: snappedCoords,
        strokeColor: '#FF00FF',
        strokeWeight: 5,
        icons: [{
          icon: me.lineSymbol4,
          offset: '100%',
          fixedRotation:true
        }]
      });

      me.snappedPolyline4.setMap(me.map);
      me.animateCircle(me.snappedPolyline4);

      me.polylines4.push(me.snappedPolyline4);
      console.log(me.polylines4);
    }

  }

  //add marker for fitBounds()
  addMarker(coords,ctr) {
    var me = this;
    var marker = new google.maps.Marker({
      position: coords,
      map: me.map,
    });
    marker.setMap(null);
    me.markers.push(marker);

    return marker;
  }

  //load markers for the landmarks
  loadMarkers(points,points2){

    var me = this;
    var records;

    if (points2!==null) {
      records = [{lat:points.lat,lng:points.lng,text:points.text,icon:points.icon},{lat:points2.lat,lng:points2.lng,text:points2.text,icon:points2.icon}];
    }
    else {
      records = points;
    }

    for (var x = 0; x < records.length; x++) {
      var image = {
        url: records[x].icon,
        scaledSize: new google.maps.Size(23, 36)
      };
      var markerPos = new google.maps.LatLng(records[x].lat,records[x].lng);
      var marker = new google.maps.Marker({
          map: me.map,
          animation: google.maps.Animation.DROP,
          position: markerPos,
          icon: image
      });
      me.markerIcon.push(marker);


      var infoWindowContent;
      if (points2!==null) {
        infoWindowContent = records[x].text;
        me.addInfoWindow(marker, infoWindowContent);
      }
      else{
        infoWindowContent = points[x].text;
        me.addInfoWindow(marker, infoWindowContent);
      }
    }
    me.clearMarkers();


  }

  // Sets the map on all markers in the array.
  setMapOnAll(map) {
    var me = this;
    for (var i = 0; i < me.markerIcon.length; i++) {
      me.markerIcon[i].setMap(map);
    }
  }

  // Removes the markers from the map, but keeps them in the array.
  clearMarkers() {
    var me = this;
    me.setMapOnAll(null);
  }

  //display info about the markers
  addInfoWindow(marker, message) {
    var me = this;
    var point_title = "<h4>"+message+"</h4>";
    var infoWindow = new google.maps.InfoWindow({
        content: point_title
    });
    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.open(me.map, marker);
    });

  }

  //Animate an icon along a polyline
  animateCircle(polyline) {
    var me = this;
    var count = 0;
    var defaultIcon = [
      {
        icon: me.lineSymbol1,
        offset: '100%'
      }
    ];

    window.setInterval(function() {
      count = (count + 0.2) % 200;
      var icons = polyline.get('icons') || defaultIcon;
      icons[0].offset = (count / 2) + '%';
      polyline.set('icons', icons);
    }, 20);
  }

  //Fit the map bounds to the current set of markers
  fitBounds(markers) {
    var me = this;
    console.log('Fit');
    console.log(me.map);
    console.log(markers);
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < markers.length; i++) {
      bounds.extend(markers[i].getPosition());
    }
    me.map.fitBounds(bounds);
  }

  //error message when cennection lost
  disableMap(){
    var me = this;
    console.log("disable map");
    let alert = me.alert.create({
      title: 'No connection',
      subTitle: 'Looks like there is a problem with your network connection. Try again later.',
      buttons: [{
        text: 'OK',
        handler: data => {
          this.nav.pop();
        }
      }]
    });
    alert.present();
  }


}
