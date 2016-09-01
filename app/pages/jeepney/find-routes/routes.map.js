import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {GoogleMapsService} from '../../../providers/google-maps-service/google-maps-service';
import {DataService} from '../../../services/data';
import {LoadingModal} from '../../../components/loading-modal/loading-modal';

import {TranslatePipe} from '../../../pipes/translate';

@Component({
  templateUrl: 'build/pages/jeepney/find-routes/routes.map.html',
  directives: [LoadingModal],
  providers: [GoogleMapsService],
  pipes: [TranslatePipe]
})

export class RoutesMapsPage {
  static get parameters(){
    return [[NavParams],[GoogleMapsService],[DataService]];
  }

  constructor(navParams,googleMapsService,dataService){

    this.navParams = navParams;
    this.googleMapsService = googleMapsService;
    this.dataService = dataService;

    this.from = this.navParams.get('from');
    this.to = this.navParams.get('to');
    console.log(this.from+" "+this.to);

    this.initRoutes();
  }

  initRoutes(){

    var me = this;


    var jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End;

    if((me.from == 'Angeles City Hall'||me.from=='Citi Center'||me.from=='Marquee Mall') && (me.to == 'Angeles Medical Center Inc.' || me.to == 'Dr. Amando L. Garcia Medical Center, Inc.') ){
      jeep1 = 'PANDAN-PAMPANG';
      jeep2 = 'MARISOL-PAMPANG';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.137851,120.588826';
      console.log('me.getJeep');
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');

    }
    else if((me.from == 'Angeles City Hall'||me.from=='Citi Center'||me.from=='Marquee Mall') && (me.to == 'Angeles University Foundation' || me.to == 'Angeles University Foundation Medical Center' || me.to == 'Diamond Subdivision' || me.to == 'Immaculate Concepcion Parish' || me.to == 'Main Gate Terminal' || me.to == 'SM City Clark' || me.to == 'Marisol' || me.to == "Saver's Mall" || me.to == 'Systems Plus College Foundation')){
      jeep1 = 'PANDAN-PAMPANG';
      jeep2 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.142913,120.596736';
      jeep2End = '15.142963,120.596637';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
      console.log('iffff');
    }
    else if((me.from == 'Angeles City Hall'||me.from=='Citi Center'||me.from=='Marquee Mall') && me.to == 'Bancal'){
      jeep1 = 'PANDAN-PAMPANG';
      jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.137851,120.588826';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
    }
    else if((me.from == 'Angeles City Hall'||me.from=='Marquee Mall') && me.to == 'Citi Center'){
      jeep1 = 'PANDAN-PAMPANG';
      jeep2 = 'PANDAN-PAMPANG';
      jeep1End = '15.153783,120.604851';
      jeep2End = '15.15372,120.60482';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }
    else if((me.from == 'Angeles City Hall'||me.from=='Citi Center'||me.from=='Marquee Mall')&& (me.to == 'Holy Angel University' || me.to == 'Holy Rosary Parish Church' || me.to == 'Jenra Mall' || me.to == 'Nepo Mall' || me.to == 'Sacred Heart Medical Center')){
      jeep1 = 'PANDAN-PAMPANG';
      jeep2 = 'VILLA-PAMPANG';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.13784,120.58891';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
    }
    else if((me.from == 'Angeles City Hall'||me.from=='Citi Center'||me.from=='Marquee Mall') && me.to == 'Holy Family Medical Center'){
      jeep1 = 'PANDAN-PAMPANG';
      jeep1End = '15.13990,120.59450';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from == 'Angeles City Hall'||me.from=='Citi Center'||me.from=='Marquee Mall') && me.to == 'Republic Central Colleges'){
      jeep1 = 'PANDAN-PAMPANG';
      jeep1End = '15.13927,120.59037';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from == 'Angeles City Hall'||me.from=='Citi Center'||me.from=='Holy Family Medical Center'||me.from=='Marquee Mall') && me.to == 'The Medical City Angeles'){
      jeep1 = 'PANDAN-PAMPANG';
      jeep1End = '15.13834,120.59335';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from == 'Angeles City Hall'||me.from=='Citi Center'||me.from=='Marquee Mall') && me.to == 'Lourdes North West'){
      jeep1 = 'PANDAN-PAMPANG';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.137851,120.588826';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
    }

    else if((me.from == 'Angeles City Hall'||me.from=='Citi Center'||me.from=='Marquee Mall') && me.to == 'Rafael Lazatin Memorial Medical Center'){
      jeep1 = 'PANDAN-PAMPANG';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'PAMPANG-HOLY';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.137851,120.588826';
      jeep3End = '15.13914,120.58746';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','back','forth');
    }

    else if((me.from == 'Angeles City Hall'||me.from=='Citi Center'||me.from=='Marquee Mall') &&
    (me.to == 'Timog Park Gate 1' || me.to == 'Timog Park Gate 2' || me.to == 'Timog Park Gate 3' || me.to == 'Transfer' || me.to == 'Villa Sol'|| me.to == 'Anunas' ||me.to == 'Carmenville' || me.to == 'City College of Angeles' || me.to == 'Cuayan' || me.to == 'Friendship' || me.to == 'Friendship Plaza')){
      jeep1 = 'PANDAN-PAMPANG';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.137851,120.588826';
      jeep3End = '15.14186,120.58799';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','back','forth',null);
    }

    else if ((me.from=='Angeles City Hall'||me.from=='Citi Center'||me.from=='Marquee Mall')&&(me.to=='Margot' || me.to == 'Sapang Bato')) {
      jeep1 = 'PANDAN-PAMPANG';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep4 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.137851,120.588826';
      jeep3End = '15.14186,120.58799';
      jeep4End = '15.16258,120.55349';
      me.getJeep(jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End,'back','back','forth','forth');

    }

    else if((me.from == 'Angeles Medical Center Inc.'||me.from=='Dr. Amando L. Garcia Medical Center, Inc.' )&& me.to == 'Angeles University Foundation' ){
      jeep1 = 'MARISOL-PAMPANG';
      jeep1End = '15.14544,120.59530';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from == 'Angeles Medical Center Inc.'||me.from=='Dr. Amando L. Garcia Medical Center, Inc.' )&& me.to == 'Angeles University Foundation Medical Center'){
      jeep1 = 'MARISOL-PAMPANG';
      jeep1End = '15.14527,120.59539';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from == 'Angeles Medical Center Inc.'||me.from=='Dr. Amando L. Garcia Medical Center, Inc.' )&& me.to == 'Bancal' ){
      jeep1 = 'MARISOL-PAMPANG-Walking';
      jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep1End = '15.14131,120.58783';
      jeep2End = '15.14131,120.58783';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }

    else if((me.from == 'Angeles Medical Center Inc.'||me.from=='Dr. Amando L. Garcia Medical Center, Inc.' )&& (me.to == 'Immaculate Concepcion Parish'||me.to == 'Marisol'||me.to == 'Main Gate Terminal'||me.to == 'SM City Clark'||me.to == 'Systems Plus College Foundation'||me.to == 'Diamond Subdivision'||me.to == "Saver's Mall")){
      jeep1 = 'MARISOL-PAMPANG-Walking';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep1End = '15.14131,120.58783';
      jeep2End = '15.14131,120.58783';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }
    else if ((me.from == 'Angeles Medical Center Inc.'||me.from=='Dr. Amando L. Garcia Medical Center, Inc.' ) && me.to==='Lourdes North West') {
      jeep1 = 'MARISOL-PAMPANG-Walking';
      jeep1End = '15.14186,120.58799';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);

    }
    else if((me.from == 'Angeles Medical Center Inc.'||me.from=='Dr. Amando L. Garcia Medical Center, Inc.' ) && (me.to == 'Holy Rosary Parish Church'||me.to == 'Jenra Mall'||me.to == 'Nepo Mall'||me.to == 'Holy Angel University'||me.to == 'The Medical City Angeles'||me.to == 'Holy Family Medical Center')){
      jeep1 = 'MARISOL-PAMPANG-Walking';
      jeep2 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.14131,120.58783';
      jeep2End = '15.141278,120.587804';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if((me.from == 'Angeles Medical Center Inc.'||me.from == 'Dr. Amando L. Garcia Medical Center, Inc.' )&& (me.to == 'Marquee Mall'||me.to == 'Citi Center'||me.to == 'Republic Central Colleges'||me.to == 'Angeles City Hall')){
      jeep1 = 'MARISOL-PAMPANG-Walking';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'PANDAN-PAMPANG';
      jeep1End = '15.14131,120.58783';
      jeep2End = '15.137851,120.588826';
      jeep3End = '15.13784,120.58891';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','forth','forth');
    }

    else if((me.from == 'Angeles Medical Center Inc.'||me.from == 'Dr. Amando L. Garcia Medical Center, Inc.' )&& me.to == 'Rafael Lazatin Memorial Medical Center'){
      jeep1 = 'MARISOL-PAMPANG-Walking';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'PAMPANG-HOLY';
      jeep1End = '15.14131,120.58783';
      jeep2End = '15.13914,120.58746';
      jeep3End = '15.13914,120.58746';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','forth','forth');
    }

    else if((me.from == 'Angeles Medical Center Inc.'||me.from == 'Dr. Amando L. Garcia Medical Center, Inc.' )&& me.to == 'Sacred Heart Medical Center'){
      jeep1 = 'MARISOL-PAMPANG-Walking';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'VILLA-PAMPANG';
      jeep1End = '15.14131,120.58783';
      jeep2End = '15.13642,120.58772';
      jeep3End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','forth','back');
    }

    else if(me.from == 'Angeles Medical Center Inc.' && me.to == 'Dr. Amando L. Garcia Medical Center, Inc.'){
      jeep1 = 'MARISOL-PAMPANG-Walking';
      jeep1End = '15.14254,120.58971';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if(me.from == 'Dr. Amando L. Garcia Medical Center, Inc.' && me.to == 'Angeles Medical Center Inc.'){
      jeep1 = 'MARISOL-PAMPANG-Walking';
      jeep1End = '15.14124,120.58907';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from == 'Angeles Medical Center Inc.'||me.from=='Dr. Amando L. Garcia Medical Center, Inc.' )&& (me.to == 'Timog Park Gate 1' || me.to == 'Timog Park Gate 2' || me.to == 'Timog Park Gate 3' || me.to == 'Transfer' || me.to == 'Villa Sol'|| me.to == 'Anunas' ||me.to == 'Carmenville' || me.to == 'City College of Angeles' || me.to == 'Cuayan' || me.to == 'Friendship' || me.to == 'Friendship Plaza')){
      jeep1 = 'MARISOL-PAMPANG-Walking';
      jeep2 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14186,120.58799';
      jeep2End = '15.14186,120.58799';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if ((me.from == 'Angeles Medical Center Inc.'||me.from=='Dr. Amando L. Garcia Medical Center, Inc.' )&&(me.to=='Margot' || me.to == 'Sapang Bato')) {
      jeep1 = 'MARISOL-PAMPANG-Walking';
      jeep2 = 'SAPANG BATO-ANGELES';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14186,120.58799';
      jeep2End = '15.16258,120.55349';
      jeep3End = '15.16258,120.55349';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','forth','forth');
    }

    else if ((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center')&&(me.to==='Angeles City Hall'||me.to==='Citi Center'||me.to==='Marquee Mall')) {
      jeep1 = 'MARISOL-PAMPANG';
      jeep2 = 'PANDAN-PAMPANG';
      jeep1End = '15.143088,120.596546';
      jeep2End = '15.142905,120.596838';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','forth');
    }

    else if((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center')&& me.to == 'Angeles Medical Center Inc.' ){
      jeep1 = 'MARISOL-PAMPANG';
      jeep1End = '15.14124,120.58907';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center'||me.from=='The Medical City Angeles') &&
    (me.to == 'Timog Park Gate 1' || me.to == 'Timog Park Gate 2' || me.to == 'Timog Park Gate 3' || me.to == 'Transfer' || me.to == 'Villa Sol' || me.to == 'Anunas' ||me.to == 'Carmenville' || me.to == 'City College of Angeles' || me.to == 'Cuayan' || me.to == 'Friendship' || me.to == 'Friendship Plaza')){
      jeep1 = 'MARISOL-PAMPANG';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      jeep3End = '15.14186,120.58799';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','back','forth');
    }

    else if((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center'||me.from=='The Medical City Angeles') &&
    me.to == 'Lourdes North West'){
      jeep1 = 'MARISOL-PAMPANG';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }


    else if ((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center'||me.from=='Holy Family Medical Center'||me.from=='The Medical City Angeles')&&(me.to=='Margot' || me.to == 'Sapang Bato')) {
      jeep1 = 'MARISOL-PAMPANG';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep4 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      jeep3End = '15.14186,120.58799';
      jeep4End = '15.16258,120.55349';
      me.getJeep(jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End,'forth','back','forth','forth');

    }

    else if ((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center'||me.from=='The Medical City Angeles')&&me.to==='Bancal') {
      jeep1 = 'MARISOL-PAMPANG';
      jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }

    else if((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center'||me.from=='Marisol'||me.from=='The Medical City Angeles') && me.to == 'Diamond Subdivision' ){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.16253,120.59107';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center'||me.from=='The Medical City Angeles') && me.to == 'Dr. Amando L. Garcia Medical Center, Inc.' ){
      jeep1 = 'MARISOL-PAMPANG';
      jeep1End = '15.14254,120.58971';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center'||me.from=='The Medical City Angeles') && me.to == 'Holy Angel University'){
      jeep1 = 'MARISOL-PAMPANG';
      jeep2 = 'VILLA-PAMPANG-Walking';
      jeep1End = '15.13483,120.59063';
      jeep2End = '15.13483,120.59063';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center'||me.from==='Holy Family Medical Center'||me.from=='The Medical City Angeles') && me.to == 'Holy Rosary Parish Church'){
      jeep1 = 'MARISOL-PAMPANG';
      jeep1End = '15.13483,120.59063';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center') && me.to == 'Holy Family Medical Center'){
      jeep1 = 'MARISOL-PAMPANG';
      jeep1End = '15.13990,120.59450';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center'||me.from=='The Medical City Angeles') && me.to == 'Immaculate Concepcion Parish' ){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.15900,120.59201';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center'||me.from=='The Medical City Angeles') && me.to == 'Jenra Mall' ){
      jeep1 = 'MARISOL-PAMPANG';
      jeep1End = '15.13622,120.58805';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center'||me.from=='The Medical City Angeles') && me.to == 'Main Gate Terminal' ){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.16840,120.58442';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center'||me.from=='The Medical City Angeles') && me.to == 'Marisol' ){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.15293,120.59217';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center'||me.from=='The Medical City Angeles') && me.to == 'Nepo Mall' ){
      jeep1 = 'MARISOL-PAMPANG';
      jeep1End = '15.13567,120.58914';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center'||me.from=='Holy Family Medical Center'||me.from=='The Medical City Angeles') && me.to == 'Rafael Lazatin Memorial Medical Center'){
      jeep1 = 'MARISOL-PAMPANG';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'PAMPANG-HOLY';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      jeep3End = '15.13914,120.58746';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','back','forth');
    }

    else if ((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center')&&me.to==='Republic Central Colleges') {
      jeep1 = 'MARISOL-PAMPANG';
      jeep2 = 'PANDAN-PAMPANG';
      jeep1End = '15.137851,120.588826';
      jeep2End = '15.13784,120.58891';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center'||me.from=='Marisol'||me.from=='The Medical City Angeles')&& me.to == 'SM City Clark' ){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.16834,120.58275';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if ((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center'||me.from=='Holy Family Medical Center'||me.from=='Marisol'||me.from=='The Medical City Angeles')&&me.to==='Sacred Heart Medical Center') {
      jeep1 = 'MARISOL-PAMPANG';
      jeep2 = 'VILLA-PAMPANG';
      jeep1End = '15.13483,120.59063';
      jeep2End = '15.13483,120.59063';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }

    else if((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center'||me.from=='The Medical City Angeles') && me.to == "Saver's Mall" ){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.16242,120.59110';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center'||me.from=='The Medical City Angeles') && me.to == 'Systems Plus College Foundation' ){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.15828,120.59222';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from==='Angeles University Foundation'||me.from==='Angeles University Foundation Medical Center')&& me.to == 'The Medical City Angeles' ){
      jeep1 = 'MARISOL-PAMPANG';
      jeep1End = '15.13834,120.59335';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Anunas'||me.from==='Carmenville'||me.from==='City College of Angeles'||me.from==='Cuayan'||me.from=='Friendship'||me.from=='Friendship Plaza'||me.from=='Margot'||me.from=='Sapang Bato'||me.from=='Timog Park Gate 1'||me.from=='Timog Park Gate 2'||me.from=='Timog Park Gate 3'||me.from=='Transfer'||me.from=='Villa Sol')&& (me.to == 'Angeles City Hall'||me.to == 'Citi Center'||me.to=='Marquee Mall'||me.to == 'Republic Central Colleges')){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'PANDAN-PAMPANG';
      jeep1End = '15.14186,120.58799';
      jeep2End = '15.14186,120.58799';
      jeep3End = '15.13784,120.58891';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','forth','forth');
    }

    else if((me.from==='Anunas'||me.from==='Carmenville'||me.from==='City College of Angeles'||me.from==='Cuayan'||me.from=='Friendship'||me.from=='Friendship Plaza'||me.from=='Margot'||me.from=='Sapang Bato'||me.from=='Timog Park Gate 1'||me.from=='Timog Park Gate 2'||me.from=='Timog Park Gate 3'||me.from=='Transfer'||me.from=='Villa Sol')&& me.to == 'Angeles Medical Center Inc.'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep2 = 'MARISOL-PAMPANG-Walking';
      jeep1End = '15.14186,120.58799';
      jeep2End = '15.14186,120.58799';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
    }

    else if((me.from==='Anunas'||me.from==='Carmenville'||me.from==='City College of Angeles'||me.from==='Cuayan'||me.from=='Friendship'||me.from=='Friendship Plaza'||me.from=='Margot'||me.from=='Sapang Bato'||me.from=='Timog Park Gate 1'||me.from=='Timog Park Gate 2'||me.from=='Timog Park Gate 3'||me.from=='Transfer'||me.from=='Villa Sol') && (me.to == 'Angeles University Foundation'||me.to == 'Angeles University Foundation Medical Center')){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'MARISOL-PAMPANG';
      jeep1End = '15.14186,120.58799';
      jeep2End = '15.14186,120.58799';
      jeep3End = '15.13892,120.58768';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','forth','back');
    }

    else if ((me.from==='Anunas'||me.from==='Carmenville'||me.from==='City College of Angeles'||me.from==='Cuayan'||me.from=='Friendship'||me.from=='Friendship Plaza'||me.from=='Margot'||me.from=='Sapang Bato'||me.from=='Timog Park Gate 1'||me.from=='Timog Park Gate 2'||me.from=='Timog Park Gate 3'||me.from=='Transfer'||me.from=='Villa Sol')&&me.to==='Bancal') {
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep1End = '15.14988,120.58427';
      jeep2End = '15.14988,120.58427';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
    }

    else if((me.from==='Anunas'||me.from==='Cuayan'||me.from=='Friendship'||me.from=='Friendship Plaza'||me.from=='Sapang Bato'||me.from=='Timog Park Gate 2'||me.from=='Timog Park Gate 3'||me.from=='Villa Sol')&& me.to == 'Carmenville' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14539,120.56643';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from==='Anunas'||me.from==='Carmenville'||me.from==='Cuayan'||me.from=='Friendship'||me.from=='Friendship Plaza'||me.from=='Sapang Bato'||me.from=='Timog Park Gate 1'||me.from=='Timog Park Gate 2'||me.from=='Timog Park Gate 3'||me.from=='Villa Sol')&& me.to == 'City College of Angeles' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14917,120.57793';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from==='Anunas'||me.from=='Friendship'||me.from=='Friendship Plaza'||me.from=='Sapang Bato'||me.from=='Timog Park Gate 2'||me.from=='Timog Park Gate 3'||me.from=='Villa Sol')&& me.to == 'Cuayan' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14449,120.55945';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from==='Anunas'||me.from==='Carmenville'||me.from==='City College of Angeles'||me.from==='Cuayan'||me.from=='Timog Park Gate 2'||me.from=='Timog Park Gate 3'||me.from=='Villa Sol')&& me.to == 'Friendship' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.16304,120.55475';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Friendship'||me.from=='Sapang Bato'||me.from=='Villa Sol')&& me.to == 'Friendship Plaza' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.15091,120.55946';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from==='Friendship Plaza'||me.from=='Timog Park Gate 1'||me.from=='Timog Park Gate 2')&& me.to == 'Friendship' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.16304,120.55475';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from=='Timog Park Gate 1'||me.from=='Timog Park Gate 2')&& me.to == 'Friendship Plaza' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.15091,120.55946';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Anunas'||me.from=='Sapang Bato')&& me.to == 'Friendship Plaza' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.15091,120.55946';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from==='Anunas'||me.from==='Carmenville'||me.from==='City College of Angeles'||me.from==='Cuayan'||me.from=='Friendship'||me.from=='Friendship Plaza'||me.from=='Timog Park Gate 1'||me.from=='Timog Park Gate 2'||me.from=='Timog Park Gate 3'||me.from=='Villa Sol')&& me.to == 'Lourdes North West' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14186,120.58799';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }
    //plaza
    else if((me.from==='Cuayan'||me.from==='Carmenville'||me.from=='City College of Angeles')&& me.to == 'Friendship Plaza' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.15091,120.55946';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Anunas'||me.from==='Cuayan'||me.from=='Friendship'||me.from=='Friendship Plaza'||me.from=='Sapang Bato'||me.from=='Timog Park Gate 2'||me.from=='Timog Park Gate 3'||me.from=='Transfer'||me.from=='Villa Sol')&& me.to == 'Timog Park Gate 1' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14505,120.56465';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from==='Anunas'||me.from=='Friendship'||me.from=='Friendship Plaza'||me.from=='Sapang Bato'||me.from=='Timog Park Gate 3'||me.from=='Transfer'||me.from=='Villa Sol')&& me.to == 'Timog Park Gate 2' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14776,120.559465';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }
    else if((me.from==='Cuayan'||me.from=='Timog Park Gate 1')&& me.to == 'Timog Park Gate 2' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14776,120.559465';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if(me.from==='Timog Park Gate 1'&& me.to == 'Cuayan' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14449,120.55945';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Anunas'||me.from=='Friendship'||me.from=='Sapang Bato'||me.from=='Transfer'||me.from=='Villa Sol')&& me.to == 'Timog Park Gate 3' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.15069,120.55945';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from==='Cuayan'||me.from=='Timog Park Gate 1'||me.from=='Timog Park Gate 2')&& me.to == 'Timog Park Gate 3' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.15069,120.55945';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Anunas'||me.from==='Carmenville'||me.from==='Cuayan'||me.from=='Friendship'||me.from=='Friendship Plaza'||me.from=='Timog Park Gate 1'||me.from=='Timog Park Gate 2'||me.from=='Timog Park Gate 3'||me.from=='Villa Sol')&& me.to == 'Transfer' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.16258,120.55349';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Anunas'||me.from==='Carmenville'||me.from==='Cuayan'||me.from=='Friendship Plaza'||me.from=='Timog Park Gate 1'||me.from=='Timog Park Gate 2'||me.from=='Timog Park Gate 3')&& me.to == 'Villa Sol' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.15803,120.55970';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from=='Friendship'||me.from=='Transfer')&& me.to == 'Villa Sol' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.15803,120.55970';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from==='Anunas'||me.from==='Carmenville'||me.from==='City College of Angeles'||me.from==='Cuayan'||me.from=='Friendship'||me.from=='Friendship Plaza'||me.from=='Timog Park Gate 1'||me.from=='Timog Park Gate 2'||me.from=='Timog Park Gate 3'||me.from=='Villa Sol')&& (me.to == 'Margot'||me.to == 'Sapang Bato') ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep2 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.16258,120.55349';
      jeep2End = '15.16258,120.55349';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if((me.from==='Anunas'||me.from==='Carmenville'||me.from==='City College of Angeles'||me.from==='Cuayan'||me.from=='Friendship'||me.from=='Friendship Plaza'||me.from=='Margot'||me.from=='Sapang Bato'||me.from=='Timog Park Gate 1'||me.from=='Timog Park Gate 2'||me.from=='Timog Park Gate 3'||me.from=='Transfer'||me.from=='Villa Sol') && (me.to == 'Diamond Subdivision' || me.to == 'Immaculate Concepcion Parish'||me.to == 'Main Gate Terminal'||me.to=='Marisol'||me.to=='SM City Clark'||me.to=="Saver's Mall"||me.to=='Systems Plus College Foundation')){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep1End = '15.14502,120.58873';
      jeep2End = '15.14502,120.58873';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
    }

    else if((me.from==='Anunas'||me.from==='Carmenville'||me.from==='City College of Angeles'||me.from==='Cuayan'||me.from=='Friendship'||me.from=='Friendship Plaza'||me.from=='Margot'||me.from=='Sapang Bato'||me.from=='Timog Park Gate 1'||me.from=='Timog Park Gate 2'||me.from=='Timog Park Gate 3'||me.from=='Transfer'||me.from=='Villa Sol') && me.to == 'Dr. Amando L. Garcia Medical Center, Inc.'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep2 = 'MARISOL-PAMPANG-Walking';
      jeep1End = '15.14186,120.58799';
      jeep2End = '15.14186,120.58799';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
    }

    else if((me.from==='Anunas'||me.from==='Carmenville'||me.from==='City College of Angeles'||me.from==='Cuayan'||me.from=='Friendship'||me.from=='Friendship Plaza'||me.from=='Margot'||me.from=='Sapang Bato'||me.from=='Timog Park Gate 1'||me.from=='Timog Park Gate 2'||me.from=='Timog Park Gate 3'||me.from=='Transfer'||me.from=='Villa Sol') && (me.to == 'Holy Angel University'||me.to == 'Holy Family Medical Center'||me.to == 'Holy Rosary Parish Church' || me.to == 'Jenra Mall' || me.to == 'Nepo Mall'||me.to=='The Medical City Angeles')){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep2 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.14186,120.58799';
      jeep2End = '15.14186,120.58799';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','forth',null);
    }

    else if((me.from==='Anunas'||me.from==='Carmenville'||me.from==='City College of Angeles'||me.from==='Cuayan'||me.from=='Friendship'||me.from=='Friendship Plaza'||me.from=='Margot'||me.from=='Sapang Bato'||me.from=='Timog Park Gate 1'||me.from=='Timog Park Gate 2'||me.from=='Timog Park Gate 3'||me.from=='Transfer'||me.from=='Villa Sol') && me.to == 'Rafael Lazatin Memorial Medical Center'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'PAMPANG-HOLY';
      jeep1End = '15.14186,120.58799';
      jeep2End = '15.14186,120.58799';
      jeep3End = '15.13914,120.58746';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','forth','forth');
    }


    else if((me.from==='Anunas'||me.from==='Carmenville'||me.from==='City College of Angeles'||me.from==='Cuayan'||me.from=='Friendship'||me.from=='Friendship Plaza'||me.from=='Margot'||me.from=='Sapang Bato'||me.from=='Timog Park Gate 1'||me.from=='Timog Park Gate 2'||me.from=='Timog Park Gate 3'||me.from=='Transfer'||me.from=='Villa Sol')&& me.to == 'Sacred Heart Medical Center'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'VILLA-PAMPANG';
      jeep1End = '15.14186,120.58799';
      jeep2End = '15.14186,120.58799';
      jeep3End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','forth','back');
    }

    else if(me.from==='Bancal' && (me.to == 'Angeles City Hall'||me.to == 'Citi Center'||me.to=='Marquee Mall'||me.to == 'Republic Central Colleges')){
      jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep2 = 'PANDAN-PAMPANG';
      jeep1End = '15.137851,120.588826';
      jeep2End = '15.13784,120.58891';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if(me.from==='Bancal' && (me.to == 'Angeles Medical Center Inc.'||me.to == 'Angeles University Foundation'||me.to == 'Angeles University Foundation Medical Center'||me.to=='Dr. Amando L. Garcia Medical Center, Inc.')){
      jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep2 = 'MARISOL-PAMPANG';
      jeep1End = '15.13884,120.58757';
      jeep2End = '15.1388493,120.58765070000001';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }

    else if(me.from==='Bancal' && (me.to == 'Timog Park Gate 1' || me.to == 'Timog Park Gate 2' || me.to == 'Timog Park Gate 3' || me.to == 'Transfer' || me.to == 'Villa Sol'|| me.to == 'Anunas' ||me.to == 'Carmenville' || me.to == 'City College of Angeles' || me.to == 'Cuayan' || me.to == 'Friendship' || me.to == 'Friendship Plaza')){
      jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep2 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14186,120.58799';
      jeep2End = '15.14186,120.58799';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if (me.from==='Bancal' &&(me.to=='Margot' || me.to == 'Sapang Bato')) {
      jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep2 = 'SAPANG BATO-ANGELES';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14186,120.58799';
      jeep2End = '15.16258,120.55349';
      jeep3End = '15.16258,120.55349';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','forth','forth');

    }

    else if(me.from==='Bancal' && (me.to == 'Diamond Subdivision' || me.to == 'Immaculate Concepcion Parish'||me.to=='Marisol'||me.to=="Saver's Mall"||me.to=='Systems Plus College Foundation')){
      jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep1End = '15.14502,120.58873';
      jeep2End = '15.14502,120.58873';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
    }

    else if(me.from==='Bancal' && (me.to == 'Holy Angel University'||me.to == 'Holy Rosary Parish Church')){
      jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep2 = 'VILLA-PAMPANG';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if(me.from==='Bancal' && me.to == 'Holy Family Medical Center'){
      jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep2 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if(me.from==='Bancal' && me.to == 'Immaculate Concepcion Parish'){
      jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep1End = '15.14502,120.58873';
      jeep2End = '15.14502,120.58873';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }

    else if(me.from==='Bancal' && (me.to == 'Jenra Mall'||me.to == 'Nepo Mall')){
      jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep2 = 'CHECK-POINT-HOLY-Walking';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }

    else if(me.from==='Bancal'&& me.to == 'Lourdes North West' ){
      jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep1End = '15.14186,120.58799';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if(me.from==='Bancal'&& me.to == 'Main Gate Terminal' ){
      jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep2 = 'CHECK-POINT-HOLY-Walking2';
      jeep1End = '15.166388,120.582832';
      jeep2End = '15.166388,120.582832';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','forth');
    }

    else if(me.from==='Bancal' && me.to == 'Rafael Lazatin Memorial Medical Center'){
      jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep2 = 'PAMPANG-HOLY';
      jeep1End = '15.13914,120.58746';
      jeep2End = '15.13914,120.58746';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if(me.from==='Bancal'&& me.to == 'SM City Clark' ){
      jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep2 = 'CHECK-POINT-HOLY-Walking3';
      jeep1End = '15.166388,120.582832';
      jeep2End = '15.166388,120.582832';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','forth');
    }

    else if(me.from==='Bancal' && me.to == 'Sacred Heart Medical Center'){
      jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep2 = 'VILLA-PAMPANG';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }

    else if(me.from==='Bancal' && me.to == 'The Medical City Angeles'){
      jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep2 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }

    else if((me.from==='Carmenville'||me.from==='Cuayan'||me.from==='City College of Angeles'||me.from==='Timog Park Gate 1'||me.from==='Timog Park Gate 2'||me.from=='Timog Park Gate 3'||me.from=='Friendship Plaza')&& me.to == 'Anunas' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.153712,120.560274';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Carmenville'||me.from==='City College of Angeles')&& me.to == 'Cuayan' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14449,120.55945';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if(me.from==='Carmenville'&& me.to == 'Timog Park Gate 2' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14776,120.559465';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if(me.from==='Carmenville'&& me.to == 'Timog Park Gate 3' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.15069,120.55945';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if(me.from==='City College of Angeles'&& me.to == 'Carmenville' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14539,120.56643';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }


    else if(me.from==='Citi Center'&& me.to == 'Angeles City Hall' ){
      jeep1 = 'PANDAN-PAMPANG';
      jeep1End = '15.16451,120.60811';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
      console.log('ac citi');
    }

    else if(me.from==='Citi Center'&& me.to == 'Marquee Mall' ){
      jeep1 = 'PANDAN-PAMPANG';
      jeep1End = '15.162432,120.608675';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if(me.from==='City College of Angeles'&& me.to == 'Timog Park Gate 1' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14505,120.56465';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if(me.from==='City College of Angeles'&& me.to == 'Timog Park Gate 2' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14776,120.559465';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if(me.from==='City College of Angeles'&& me.to == 'Timog Park Gate 3' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.15069,120.55945';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if(me.from==='City College of Angeles'&& me.to == 'Transfer' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.16258,120.55349';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if(me.from==='City College of Angeles'&& me.to == 'Villa Sol' ){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.15803,120.55970';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Diamond Subdivision'||me.from==='Immaculate Concepcion Parish'||me.from=='Main Gate Terminal'||me.from=='SM City Clark'||me.from=="Saver's Mall"||me.from=='Systems Plus College Foundation')&& (me.to == 'Angeles Medical Center Inc.'||me.to=='Dr. Amando L. Garcia Medical Center, Inc.')){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep2 = 'MARISOL-PAMPANG';
      jeep1End = '15.138817,120.587592';
      jeep2End = '15.1388493,120.58765070000001';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }


    else if((me.from==='Diamond Subdivision'||me.from==='Immaculate Concepcion Parish'||me.from=='Main Gate Terminal'||me.from=='SM City Clark'||me.from=="Saver's Mall"||me.from=='Systems Plus College Foundation')&& (me.to == 'Angeles University Foundation'||me.to == 'Angeles University Foundation Medical Center'||me.to == 'Holy Family Medical Center')){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep2 = 'MARISOL-PAMPANG';
      jeep1End = '15.15259,120.59180';
      jeep2End = '15.15259,120.59180';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }


    else if((me.from==='Diamond Subdivision'||me.from==='Immaculate Concepcion Parish'||me.from=='SM City Clark'||me.from=="Saver's Mall"||me.from=='Systems Plus College Foundation')&& (me.to == 'Timog Park Gate 1' || me.to == 'Timog Park Gate 2' || me.to == 'Timog Park Gate 3' || me.to == 'Transfer' || me.to == 'Villa Sol'|| me.to == 'Anunas' ||me.to == 'Carmenville' || me.to == 'City College of Angeles' || me.to == 'Cuayan' || me.to == 'Friendship' || me.to == 'Friendship Plaza')){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep2 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14186,120.58799';
      jeep2End = '15.14186,120.58799';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if((me.from==='Diamond Subdivision'||me.from==='Immaculate Concepcion Parish'||me.from=="Saver's Mall"||me.from=='Systems Plus College Foundation')&& me.to == 'Bancal'){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep1End = '15.14502,120.58873';
      jeep2End = '15.14502,120.58873';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }

    else if((me.from==='Diamond Subdivision'||me.from==='Immaculate Concepcion Parish'||me.from=='Main Gate Terminal'||me.from=='Lourdes North West'||me.from=='SM City Clark'||me.from=="Saver's Mall"||me.from=='Systems Plus College Foundation')&& (me.to == 'Marquee Mall'||me.to == 'Citi Center'||me.to == 'Republic Central Colleges'||me.to == 'Angeles City Hall')){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep2 = 'PANDAN-PAMPANG';
      jeep1End = '15.137851,120.588826';
      jeep2End = '15.13784,120.58891';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if(me.from=='Main Gate Terminal'&&me.to == 'Diamond Subdivision'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.16253,120.59107';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if((me.from == 'Immaculate Concepcion Parish'||me.from=='Systems Plus College Foundation')&&me.to == 'Diamond Subdivision'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.16253,120.59107';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from==='Diamond Subdivision'||me.from==='Immaculate Concepcion Parish'||me.from=="Saver's Mall"||me.from==='Lourdes North West'||me.from=='Systems Plus College Foundation') && me.to == 'Holy Angel University'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13417,120.59130';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if((me.from==='Diamond Subdivision'||me.from==='Immaculate Concepcion Parish'||me.from=="Saver's Mall"||me.from==='Lourdes North West'||me.from=='Systems Plus College Foundation') && me.to == 'Holy Rosary Parish Church'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13483,120.59063';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if((me.from==='Diamond Subdivision'||me.from=='SM City Clark'||me.from=="Saver's Mall") && me.to == 'Immaculate Concepcion Parish' ){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep1End = '15.15900,120.59201';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Diamond Subdivision'||me.from==='Immaculate Concepcion Parish'||me.from=="Saver's Mall"||me.from=='Systems Plus College Foundation') && me.to == 'Jenra Mall'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13622,120.58805';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Diamond Subdivision'||me.from==='Immaculate Concepcion Parish'||me.from=="Saver's Mall"||me.from=='Systems Plus College Foundation') && me.to == 'Nepo Mall'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13567,120.58914';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Diamond Subdivision'||me.from==='Immaculate Concepcion Parish'||me.from=='SM City Clark'||me.from=="Saver's Mall"||me.from=='Systems Plus College Foundation') && me.to == 'Lourdes North West'){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep1End = '15.14186,120.58799';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Diamond Subdivision'||me.from=="Saver's Mall") && me.to == 'Systems Plus College Foundation'){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep1End = '15.15828,120.59222';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Diamond Subdivision'||me.from==='Immaculate Concepcion Parish'||me.from=='Marisol'||me.from=="Saver's Mall"||me.from=='Systems Plus College Foundation') && me.to == 'Main Gate Terminal'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.16840,120.58442';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from==='Diamond Subdivision'||me.from==='Immaculate Concepcion Parish'||me.from=='Main Gate Terminal'||me.from=="Saver's Mall"||me.from=='Systems Plus College Foundation') && me.to == 'Marisol'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.152765,120.591903';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if((me.from==='Diamond Subdivision'||me.from==='Immaculate Concepcion Parish'||me.from=="Saver's Mall"||me.from=='Systems Plus College Foundation') && me.to == 'SM City Clark'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.16834,120.58275';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if((me.from==='Immaculate Concepcion Parish'||me.from=='Marisol'||me.from=='Systems Plus College Foundation') && me.to == "Saver's Mall"){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.16242,120.59110';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back',null);
    }

    else if ((me.from==='Diamond Subdivision'||me.from==='Immaculate Concepcion Parish'||me.from=='Main Gate Terminal'||me.from=='SM City Clark'||me.from=="Saver's Mall"||me.from=='Systems Plus College Foundation') &&(me.to=='Margot' || me.to == 'Sapang Bato')) {
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep2 = 'SAPANG BATO-ANGELES';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14186,120.58799';
      jeep2End = '15.16258,120.55349';
      jeep3End = '15.16258,120.55349';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','forth','forth');
    }

    else if((me.from==='Diamond Subdivision'||me.from==='Immaculate Concepcion Parish'||me.from=='Lourdes North West'||me.from=='Main Gate Terminal'||me.from=='SM City Clark'||me.from=="Saver's Mall"||me.from=='Systems Plus College Foundation') && me.to == 'Rafael Lazatin Memorial Medical Center'){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep2 = 'PAMPANG-HOLY';
      jeep1End = '15.13914,120.58746';
      jeep2End = '15.13914,120.58746';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if((me.from==='Diamond Subdivision'||me.from==='Immaculate Concepcion Parish'||me.from=='Main Gate Terminal'||me.from=="Saver's Mall"||me.from=='Systems Plus College Foundation') && me.to == 'Sacred Heart Medical Center'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep2 = 'VILLA-PAMPANG';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }

    else if((me.from==='Diamond Subdivision'||me.from==='Immaculate Concepcion Parish'||me.from=="Saver's Mall"||me.from=='Systems Plus College Foundation'||me.from=='Main Gate Terminal') && me.to == 'The Medical City Angeles'){
      jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13834,120.59335';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Holy Angel University' && (me.to=='Angeles City Hall'||me.to=='Citi Center'||me.to=='Marquee Mall'||me.to=='Republic Central Colleges')){
      jeep1 = 'MARISOL-PAMPANG-Walking2';
      jeep2  = 'MARISOL-PAMPANG';
      jeep3 = 'PANDAN-PAMPANG';
      jeep1End = '15.13483,120.59063';
      jeep2End = '15.13483,120.59063';
      jeep3End = '15.13784,120.58891';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','forth','forth');
    }

    else if(me.from==='Holy Angel University' && me.to == 'Bancal'){
      jeep1 = 'MARISOL-PAMPANG-Walking2';
      jeep2  = 'MARISOL-PAMPANG';
      jeep3 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep1End = '15.13483,120.59063';
      jeep2End = '15.13483,120.59063';
      jeep3End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','forth','back');
    }

    else if (me.from=='Holy Angel University'&&(me.to == 'Timog Park Gate 1' || me.to == 'Timog Park Gate 2' || me.to == 'Timog Park Gate 3' || me.to == 'Transfer' || me.to == 'Villa Sol'|| me.to == 'Anunas' ||me.to == 'Carmenville' || me.to == 'City College of Angeles' || me.to == 'Cuayan' || me.to == 'Friendship' || me.to == 'Friendship Plaza')) {
      jeep1 = 'MARISOL-PAMPANG-Walking2';
      jeep2 = 'MARISOL-PAMPANG';
      jeep3 = 'CHECK-POINT-HOLY';
      jeep4 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.13483,120.59063';
      jeep2End = '15.13483,120.59063';
      jeep3End = '15.13642,120.58772';
      jeep4End = '15.14186,120.58799';
      me.getJeep(jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End,'forth','forth','back','forth');
    }

    else if((me.from == 'Holy Angel University') && me.to == 'Rafael Lazatin Memorial Medical Center'){
      jeep1 = 'MARISOL-PAMPANG-Walking3';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'PAMPANG-HOLY';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      jeep3End = '15.13914,120.58746';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','back','forth');
    }

    else if (me.from=='Holy Angel University'&&(me.to == 'Margot'||me.to == 'Sapang Bato')) {
      jeep1 = 'MARISOL-PAMPANG-Walking3';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep4 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      jeep3End = '15.14186,120.58799';
      jeep4End = '15.16258,120.55349';
      me.getJeep(jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End,'forth','back','forth','forth');
    }

    else if(me.from==='Holy Angel University' && (me.to == 'Angeles Medical Center Inc.'||me.to=='Dr. Amando L. Garcia Medical Center, Inc.'||me.to == 'Jenra Mall' ||me.to == 'Nepo Mall' )){
      console.log('holi2');
      jeep1 = 'MARISOL-PAMPANG-Walking2';
      jeep2  = 'MARISOL-PAMPANG';
      jeep1End = '15.13483,120.59063';
      jeep2End = '15.13483,120.59063';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if((me.from==='Holy Angel University'||me.from==='Holy Family Medical Center'||me.from=='Holy Rosary Parish Church'||me.from=='Jenra Mall'||me.from=='Nepo Mall') && me.to == 'Angeles University Foundation'){
      jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.14544,120.59530';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if((me.from==='Holy Angel University'||me.from==='Holy Family Medical Center'||me.from=='Holy Rosary Parish Church'||me.from=='Jenra Mall'||me.from=='Nepo Mall') && me.to == 'Angeles University Foundation Medical Center'){
      jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.14527,120.59539';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if((me.from==='Holy Angel University'||me.from==='Holy Family Medical Center'||me.from=='Holy Rosary Parish Church'||me.from=='Jenra Mall'||me.from=='Nepo Mall') && me.to == 'Diamond Subdivision'){
      jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.16253,120.59107';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from==='Holy Angel University'||me.from=='Holy Rosary Parish Church'||me.from=='Jenra Mall'||me.from=='Nepo Mall') && me.to == 'Holy Family Medical Center'){
      jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13990,120.59450';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from==='Holy Angel University'||me.from==='Holy Family Medical Center'||me.from=='Holy Rosary Parish Church'||me.from=='Jenra Mall'||me.from=='Marisol'||me.from=='Nepo Mall') && me.to == 'Immaculate Concepcion Parish'){
      jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.15900,120.59201';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from==='Holy Angel University'||me.from==='Holy Family Medical Center'||me.from=='Holy Rosary Parish Church'||me.from=='Jenra Mall'||me.from=='Nepo Mall') && me.to == 'Main Gate Terminal'){
      jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.16840,120.58442';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from==='Holy Angel University'||me.from==='Holy Family Medical Center'||me.from=='Holy Rosary Parish Church'||me.from=='Jenra Mall'||me.from=='Nepo Mall') && me.to == 'Marisol'){
      jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.15293,120.59217';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from==='Holy Angel University'||me.from==='Holy Family Medical Center'||me.from=='Holy Rosary Parish Church'||me.from=='Jenra Mall'||me.from=='Nepo Mall') && me.to == 'SM City Clark'){
      jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.16834,120.58275';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from==='Holy Angel University'||me.from=='Holy Rosary Parish Church'||me.from=='Nepo Mall') && me.to == 'Sacred Heart Medical Center'){
      jeep1  = 'VILLA-PAMPANG';
      jeep1End = '15.12493,120.59831';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from==='Holy Angel University'||me.from==='Holy Family Medical Center'||me.from=='Holy Rosary Parish Church'||me.from=='Jenra Mall'||me.from=='Nepo Mall') && me.to == "Saver's Mall"){
      jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.16242,120.59110';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from==='Holy Angel University'||me.from==='Holy Family Medical Center'||me.from=='Holy Rosary Parish Church'||me.from=='Jenra Mall'||me.from=='Marisol'||me.from=='Nepo Mall')&& me.to == 'Systems Plus College Foundation'){
      jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.15828,120.59222';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from==='Holy Angel University'||me.from=='Holy Rosary Parish Church'||me.from=='Jenra Mall'||me.from=='Nepo Mall') && me.to == 'The Medical City Angeles'){
      jeep1  = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13834,120.59335';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if(me.from==='Holy Angel University'&& me.to == 'Lourdes North West'){
      jeep1 = 'MARISOL-PAMPANG-Walking2';
      jeep2 = 'MARISOL-PAMPANG';
      jeep3 = 'CHECK-POINT-HOLY';
      jeep1End = '15.13483,120.59063';
      jeep2End = '15.13483,120.59063';
      jeep3End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','back','back');
    }

    else if((me.from==='Holy Family Medical Center')&&(me.to == 'Timog Park Gate 1' || me.to == 'Timog Park Gate 2' || me.to == 'Timog Park Gate 3' || me.to == 'Transfer' || me.to == 'Villa Sol'|| me.to == 'Anunas' ||me.to == 'Carmenville' || me.to == 'City College of Angeles' || me.to == 'Cuayan' || me.to == 'Friendship' || me.to == 'Friendship Plaza')){
      jeep1 = 'MARISOL-PAMPANG';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      jeep3End = '15.14186,120.58799';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','back','forth');
    }

    else if(me.from==='Holy Family Medical Center' && me.to=='Bancal'){
      jeep1  = 'MARISOL-PAMPANG';
      jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
    }

    else if((me.from==='Holy Family Medical Center'||me.from=='Holy Rosary Parish Church'||me.from=='Jenra Mall'||me.from=='Nepo Mall') && me.to=='Angeles Medical Center Inc.'){
      jeep1  = 'MARISOL-PAMPANG';
      jeep1End = '15.14124,120.58907';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if((me.from==='Holy Family Medical Center'||me.from=='Holy Rosary Parish Church'||me.from=='Jenra Mall'||me.from=='Nepo Mall') && me.to=='Dr. Amando L. Garcia Medical Center, Inc.'){
      jeep1  = 'MARISOL-PAMPANG';
      jeep1End = '15.14254,120.58971';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if((me.from==='Holy Family Medical Center'||me.from=='Holy Rosary Parish Church') && me.to=='Jenra Mall'){
      jeep1  = 'MARISOL-PAMPANG';
      jeep1End = '15.13622,120.58805';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if((me.from==='Holy Family Medical Center'||me.from=='Holy Rosary Parish Church') && me.to=='Nepo Mall'){
      jeep1  = 'MARISOL-PAMPANG';
      jeep1End = '15.13567,120.58914';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Holy Family Medical Center' && me.to=='Republic Central Colleges'){
      jeep1  = 'PANDAN-PAMPANG';
      jeep1End = '15.13927,120.59037';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from==='Holy Family Medical Center') && me.to=='Holy Angel University'){
      jeep1  = 'MARISOL-PAMPANG';
      jeep2  = 'MARISOL-PAMPANG-Walking4';
      jeep1End = '15.13483,120.59063';
      jeep2End = '15.13483,120.59063';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if(me.from==='Holy Family Medical Center'&& me.to == 'Lourdes North West'){
      jeep1 = 'MARISOL-PAMPANG';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }

    else if(me.from==='Holy Rosary Parish Church' && (me.to=='Angeles City Hall'||me.to=='Citi Center'||me.to=='Marquee Mall'||me.to=='Republic Central Colleges')){
      jeep1 = 'MARISOL-PAMPANG';
      jeep2  = 'PANDAN-PAMPANG';
      jeep1End = '15.137851,120.588826';
      jeep2End = '15.13784,120.58891';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if (me.from==='Holy Rosary Parish Church'&&(me.to == 'Timog Park Gate 1' || me.to == 'Timog Park Gate 2' || me.to == 'Timog Park Gate 3' || me.to == 'Transfer' || me.to == 'Villa Sol'|| me.to == 'Anunas' ||me.to == 'Carmenville' || me.to == 'City College of Angeles' || me.to == 'Cuayan' || me.to == 'Friendship' || me.to == 'Friendship Plaza')) {
      jeep1 = 'MARISOL-PAMPANG';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      jeep3End = '15.14186,120.58799';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','back','forth');
    }

    else if(me.from==='Holy Rosary Parish Church'&& me.to == 'Bancal'){
      jeep1  = 'MARISOL-PAMPANG';
      jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }

    else if(me.from==='Holy Rosary Parish Church'&& me.to == 'Holy Family Medical Center'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13990,120.59450';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Holy Rosary Parish Church'&& me.to == 'Lourdes North West'){
      jeep1 = 'MARISOL-PAMPANG';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }

    else if (me.from=='Holy Rosary Parish Church'&&(me.to == 'Margot'||me.to == 'Sapang Bato')) {
      jeep1 = 'MARISOL-PAMPANG';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep4 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      jeep3End = '15.14186,120.58799';
      jeep4End = '15.16258,120.55349';
      me.getJeep(jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End,'forth','back','forth','forth');
    }

    else if((me.from == 'Holy Rosary Parish Church') && me.to == 'Rafael Lazatin Memorial Medical Center'){
      jeep1 = 'MARISOL-PAMPANG';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'PAMPANG-HOLY';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      jeep3End = '15.13914,120.58746';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','back','forth');
    }

    else if(me.from==='Immaculate Concepcion Parish' && (me.to=='Angeles City Hall'||me.to=='Citi Center'||me.to=='Marquee Mall')){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep2  = 'PANDAN-PAMPANG';
      jeep1End = '15.137851,120.588826';
      jeep2End = '15.13784,120.58891';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if((me.from==='Jenra Mall'||me.from=='Nepo Mall') && (me.to=='Angeles City Hall'||me.to=='Citi Center'||me.to=='Marquee Mall'||me.to=='Republic Central Colleges')){
      jeep1 = 'PANDAN-PAMPANG-Walking';
      jeep2  = 'PANDAN-PAMPANG';
      jeep1End = '15.137851,120.588826';
      jeep2End = '15.13784,120.58891';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if((me.from==='Jenra Mall'||me.from=='Nepo Mall')&&(me.to == 'Timog Park Gate 1' || me.to == 'Timog Park Gate 2' || me.to == 'Timog Park Gate 3' || me.to == 'Transfer' || me.to == 'Villa Sol'|| me.to == 'Anunas' ||me.to == 'Carmenville' || me.to == 'City College of Angeles' || me.to == 'Cuayan' || me.to == 'Friendship' || me.to == 'Friendship Plaza')){
      jeep1 = 'MARISOL-PAMPANG-Walking5';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      jeep3End = '15.14186,120.58799';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','back','forth');
    }

    else if((me.from==='Jenra Mall'||me.from=='Nepo Mall') && me.to=='Bancal'){
      jeep1  = 'MARISOL-PAMPANG-Walking5';
      jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
    }

    else if(me.from==='Jenra Mall' && me.to=='Holy Angel University'){
      jeep1  = 'VILLA-PAMPANG';
      jeep1End = '15.13417,120.59130';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if(me.from==='Jenra Mall' && me.to=='Holy Rosary Parish Church'){
      jeep1  = 'VILLA-PAMPANG';
      jeep1End = '15.13483,120.59063';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if(me.from==='Jenra Mall' && me.to=='Sacred Heart Medical Center'){
      jeep1  = 'VILLA-PAMPANG';
      jeep1End = '15.12493,120.59831';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from==='Jenra Mall'||me.from=='Nepo Mall') && me.to=='Lourdes North West'){
      jeep1  = 'MARISOL-PAMPANG-Walking5';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
    }

    else if ((me.from=='Jenra Mall'||me.from=='Nepo Mall')&&(me.to == 'Margot'||me.to == 'Sapang Bato')) {
      jeep1 = 'MARISOL-PAMPANG-Walking5';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep4 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      jeep3End = '15.14186,120.58799';
      jeep4End = '15.16258,120.55349';
      me.getJeep(jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End,'forth','back','forth','forth');
    }

    else if((me.from=='Jenra Mall'||me.from=='Nepo Mall')&& me.to == 'Rafael Lazatin Memorial Medical Center'){
      jeep1 = 'MARISOL-PAMPANG-Walking5';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'PAMPANG-HOLY';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      jeep3End = '15.13914,120.58746';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','back','forth');
    }

    else if(me.from==='Lourdes North West' && (me.to == 'Angeles Medical Center Inc.'||me.to == 'Angeles University Foundation'||me.to == 'Angeles University Foundation Medical Center'||me.to=='Dr. Amando L. Garcia Medical Center, Inc.')){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep2 = 'MARISOL-PAMPANG';
      jeep1End = '15.138817,120.587592';
      jeep2End = '15.1388493,120.58765070000001';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }

    else if(me.from==='Lourdes North West' && me.to == 'Anunas'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.153712,120.560274';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Lourdes North West' && me.to == 'Carmenville'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14539,120.56643';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Lourdes North West' && me.to == 'Cuayan'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14449,120.55945';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Lourdes North West' && me.to == 'City College of Angeles'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14917,120.57793';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Lourdes North West' && me.to == 'Friendship'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.16304,120.55475';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Lourdes North West' && me.to == 'Friendship Plaza'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.15091,120.55946';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Lourdes North West' && (me.to == 'Margot'||me.to == 'Sapang Bato')){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep2 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.16258,120.55349';
      jeep2End = '15.16258,120.55349';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }
    //
    // else if(me.from==='Lourdes North West' && ){
    //   jeep1 = 'SAPANG BATO-ANGELES';
    //   jeep1End = '15.16966,120.51317';
    //   me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    // }

    else if(me.from==='Lourdes North West' && me.to == 'Timog Park Gate 1'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14505,120.56465';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Lourdes North West' && me.to == 'Timog Park Gate 2'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14776,120.559465';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Lourdes North West' && me.to == 'Timog Park Gate 3'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.15069,120.55945';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Lourdes North West' && me.to == 'Transfer'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.16258,120.55349';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Lourdes North West' && me.to == 'Villa Sol'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.15803,120.55970';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Lourdes North West' && me.to == 'Bancal'){
      jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep1End = '15.15346,120.58335';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if(me.from==='Lourdes North West' && me.to == 'Diamond Subdivision'){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep1End = '15.16253,120.59107';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if(me.from==='Lourdes North West' && me.to == 'Immaculate Concepcion Parish'){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep1End = '15.15900,120.59201';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if(me.from==='Lourdes North West' && me.to == 'Main Gate Terminal'){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep1End = '15.16840,120.58442';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if(me.from==='Lourdes North West' && me.to == 'Marisol'){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep1End = '15.15293,120.59217';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if(me.from==='Lourdes North West' && me.to == 'SM City Clark'){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep1End = '15.16834,120.58275';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if(me.from==='Lourdes North West' && me.to == "Saver's Mall"){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep1End = '15.16242,120.59110';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if(me.from==='Lourdes North West' && me.to == 'Systems Plus College Foundation'){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep1End = '15.15828,120.59222';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if(me.from==='Lourdes North West' && me.to == 'Holy Family Medical Center'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13990,120.59450';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Lourdes North West' && me.to == 'Jenra Mall'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13622,120.58805';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Lourdes North West' && me.to == 'Nepo Mall'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13567,120.58914';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Lourdes North West' && me.to == 'The Medical City Angeles'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13834,120.59335';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Lourdes North West' && (me.to=='Citi Center'||me.to=='Marquee Mall'||me.to=='Republic Central Colleges')){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep2  = 'PANDAN-PAMPANG';
      jeep1End = '15.137851,120.588826';
      jeep2End = '15.13784,120.58891';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if(me.from==='Lourdes North West' && me.to == 'Sacred Heart Medical Center'){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep2 = 'VILLA-PAMPANG';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }

    else if(me.from==='Main Gate Terminal' && me.to == 'Holy Angel University'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13417,120.59130';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Main Gate Terminal' && me.to == 'Holy Rosary Parish Church'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13483,120.59063';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Main Gate Terminal' && me.to == 'Jenra Mall'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13622,120.58805';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Main Gate Terminal' && me.to == 'Nepo Mall'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13567,120.58914';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Main Gate Terminal' && me.to == 'Immaculate Concepcion Parish'){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep1End = '15.15900,120.59201';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Main Gate Terminal' && me.to == 'Lourdes North West'){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep1End = '15.14186,120.58799';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }



    else if(me.from=='Main Gate Terminal'&& (me.to == 'Timog Park Gate 1' || me.to == 'Timog Park Gate 2' || me.to == 'Timog Park Gate 3' || me.to == 'Transfer' || me.to == 'Villa Sol'|| me.to == 'Anunas' ||me.to == 'Carmenville' || me.to == 'City College of Angeles' || me.to == 'Cuayan'|| me.to == 'Friendship Plaza')){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep2 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14186,120.58799';
      jeep2End = '15.14186,120.58799';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if(me.from==='Main Gate Terminal' && me.to == 'Friendship'){
      jeep1 = 'MAINGATE-FRIENDSHIP-Walking';
      jeep2 = 'MAINGATE-FRIENDSHIP';
      jeep1End = '15.166427,120.583066';
      jeep2End = '15.166427,120.583066';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if((me.from==='Margot'||me.from=='Sapang Bato'||me.from=='Transfer'||me.from=='Villa Sol'||me.from=='Friendship') && me.to == 'Anunas'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.153712,120.560274';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from==='Margot'||me.from=='Transfer') && me.to == 'Carmenville'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14539,120.56643';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from==='Margot'||me.from=='Transfer') && me.to == 'City College of Angeles'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14917,120.57793';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from==='Margot'||me.from=='Transfer') && me.to == 'Cuayan'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14449,120.55945';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from==='Margot'||me.from=='Sapang Bato'||me.from=='Transfer') && me.to == 'Friendship'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.16304,120.55475';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from==='Margot'||me.from=='Sapang Bato'||me.from=='Transfer') && me.to == 'Friendship Plaza'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.15091,120.55946';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from==='Margot'||me.from=='Sapang Bato'||me.from=='Transfer') && me.to == 'Lourdes North West'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14186,120.58799';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if(me.from==='Margot' && me.to == 'Sapang Bato'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.16966,120.51317';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from == 'Sapang Bato'&&me.to==='Margot'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.17078,120.53471';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if(me.from==='Margot' && me.to == 'Timog Park Gate 1'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14505,120.56465';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if(me.from==='Margot' && me.to == 'Timog Park Gate 2'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.14776,120.559465';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if(me.from==='Margot' && me.to == 'Timog Park Gate 3'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.15069,120.55945';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from==='Margot'||me.from=='Sapang Bato') && me.to == 'Transfer'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.16258,120.55349';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if((me.from==='Margot'||me.from=='Sapang Bato') && me.to == 'Villa Sol'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.15803,120.55970';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if(me.from==='Transfer' && me.to == 'Margot'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.17078,120.53471';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Transfer' && me.to == 'Sapang Bato'){
      jeep1 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.16966,120.51317';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Marisol' &&(me.to=='Angeles City Hall'||me.to=='Citi Center'||me.to=='Marquee Mall')){
      jeep1 = 'MARISOL-PAMPANG';
      jeep2 = 'PANDAN-PAMPANG';
      jeep1End = '15.143088,120.596546';
      jeep2End = '15.142838,120.596806';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if(me.from==='Marisol' &&me.to=='Republic Central Colleges'){
      jeep1 = 'MARISOL-PAMPANG';
      jeep2 = 'PANDAN-PAMPANG';
      jeep1End = '15.137851,120.588826';
      jeep2End = '15.13784,120.58891';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }

    else if(me.from==='Marisol' &&me.to=='Angeles Medical Center Inc.'){
      console.log('mrii');
      jeep1 = 'MARISOL-PAMPANG';
      jeep1End = '15.14124,120.58907';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Marisol' &&me.to=='Angeles University Foundation Medical Center'){
      console.log('mrii');
      jeep1 = 'MARISOL-PAMPANG';
      jeep1End = '15.14527,120.59539';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Marisol' &&me.to=='Angeles University Foundation'){
      console.log('mrii');
      jeep1 = 'MARISOL-PAMPANG';
      jeep1End = '15.14544,120.59530';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Marisol' &&me.to=='Dr. Amando L. Garcia Medical Center, Inc.'){
      console.log('mrii');
      jeep1 = 'MARISOL-PAMPANG';
      jeep1End = '15.14254,120.58971';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Marisol' &&(me.to == 'Timog Park Gate 1' || me.to == 'Timog Park Gate 2' || me.to == 'Timog Park Gate 3' || me.to == 'Transfer' || me.to == 'Villa Sol'|| me.to == 'Anunas' ||me.to == 'Carmenville' || me.to == 'City College of Angeles' || me.to == 'Cuayan' || me.to == 'Friendship' || me.to == 'Friendship Plaza')){
      jeep1 = 'CHECK-POINT-HOLY-Walking4';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.15259,120.59180';
      jeep2End = '15.15259,120.59180';
      jeep3End = '15.14186,120.58799';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','forth','forth');
    }

    else if(me.from==='Marisol' &&(me.to == 'Margot'||me.to=='Sapang Bato')){
      console.log('marimarg');
      jeep1 = 'CHECK-POINT-HOLY-Walking4';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep4 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.15259,120.59180';
      jeep2End = '15.15259,120.59180';
      jeep3End = '15.14186,120.58799';
      jeep4End = '15.16258,120.55349';
      me.getJeep(jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End,'forth','forth','forth','forth');
    }


    else if(me.from==='Marisol' &&me.to=='Bancal'){
      jeep1 = 'CHECK-POINT-HOLY-Walking4';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep1End = '15.15259,120.59180';
      jeep2End = '15.15259,120.59180';
      jeep3End = '15.14502,120.58873';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','forth','back');
    }

    else if(me.from==='Marisol' && me.to == 'Rafael Lazatin Memorial Medical Center'){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep2 = 'PAMPANG-HOLY';
      jeep1End = '15.13914,120.58746';
      jeep2End = '15.13914,120.58746';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if(me.from==='Marisol' && me.to == 'Holy Angel University'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13417,120.59130';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Marisol' && me.to == 'Holy Family Medical Center'){
      jeep1 = 'MARISOL-PAMPANG';
      jeep1End = '15.13990,120.59450';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Marisol' && me.to == 'Holy Rosary Parish Church'){
      jeep1 = 'MARISOL-PAMPANG';
      jeep1End = '15.13483,120.59063';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Marisol' && me.to == 'Jenra Mall'){
      jeep1 = 'MARISOL-PAMPANG';
      jeep1End = '15.13622,120.58805';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Marisol' && me.to == 'Nepo Mall'){
      jeep1 = 'MARISOL-PAMPANG';
      jeep1End = '15.13567,120.58914';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Marisol' && me.to == 'Lourdes North West'){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep1End = '15.14186,120.58799';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Marisol' && me.to == 'The Medical City Angeles'){
      jeep1 = 'MARISOL-PAMPANG';
      jeep1End = '15.13834,120.59335';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Nepo Mall' && me.to == 'Holy Angel University'){
      jeep1 = 'VILLA-PAMPANG';
      jeep1End = '15.13417,120.59130';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Nepo Mall' && me.to == 'Holy Rosary Parish Church'){
      jeep1 = 'VILLA-PAMPANG';
      jeep1End = '15.13483,120.59063';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Rafael Lazatin Memorial Medical Center' &&(me.to=='Angeles City Hall'||me.to=='Citi Center'||me.to=='Marquee Mall'||me.to=='Republic Central Colleges')){

      jeep1 = 'PAMPANG-HOLY';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'PANDAN-PAMPANG';
      jeep1End = '15.13914,120.58746';
      jeep2End = '15.137851,120.588826';
      jeep3End = '15.13784,120.58891';

      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','forth','forth');
    }

    else if(me.from==='Rafael Lazatin Memorial Medical Center' &&(me.to == 'Angeles Medical Center Inc.'||me.to=='Dr. Amando L. Garcia Medical Center, Inc.' )){
      jeep1 = 'PAMPANG-HOLY';
      jeep2 = 'MARISOL-PAMPANG';
      jeep1End = '15.13914,120.58746';
      jeep2End = '15.1388493,120.58765070000001';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','forth');
    }

    else if(me.from==='Rafael Lazatin Memorial Medical Center' &&(me.to=='Angeles University Foundation'||me.to=='Angeles University Foundation Medical Center')){
      jeep1 = 'PAMPANG-HOLY';
      jeep2 = 'MARISOL-PAMPANG';
      jeep1End = '15.13914,120.58746';
      jeep2End = '15.1388493,120.58765070000001';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
    }

    else if(me.from==='Rafael Lazatin Memorial Medical Center' &&(me.to == 'Timog Park Gate 1' || me.to == 'Timog Park Gate 2' || me.to == 'Timog Park Gate 3' || me.to == 'Transfer' || me.to == 'Villa Sol'|| me.to == 'Anunas' ||me.to == 'Carmenville' || me.to == 'City College of Angeles' || me.to == 'Cuayan' || me.to == 'Friendship' || me.to == 'Friendship Plaza')){
      jeep1 = 'PAMPANG-HOLY';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.13914,120.58746';
      jeep2End = '15.13914,120.58746';
      jeep3End = '15.14186,120.58799';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','back','forth');
    }

    else if(me.from==='Rafael Lazatin Memorial Medical Center' &&me.to=='Bancal'){
      jeep1 = 'PAMPANG-HOLY';
      jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep1End = '15.13914,120.58746';
      jeep2End = '15.13914,120.58746';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
    }

    else if(me.from==='Rafael Lazatin Memorial Medical Center' &&(me.to == 'Immaculate Concepcion Parish'||me.to == 'Marisol'||me.to == 'Main Gate Terminal'||me.to == 'SM City Clark'||me.to == 'Systems Plus College Foundation'||me.to == 'Diamond Subdivision'||me.to == "Saver's Mall"||me.to=='Lourdes North West')){
      jeep1 = 'PAMPANG-HOLY';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep1End = '15.13914,120.58746';
      jeep2End = '15.13914,120.58746';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
    }

    else if(me.from==='Rafael Lazatin Memorial Medical Center' &&(me.to == 'Holy Rosary Parish Church'||me.to == 'Jenra Mall'||me.to == 'Nepo Mall'||me.to == 'Holy Angel University'||me.to == 'The Medical City Angeles'||me.to == 'Holy Family Medical Center')){
      jeep1 = 'PAMPANG-HOLY';
      jeep2 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13914,120.58746';
      jeep2End = '15.13914,120.58746';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
    }

    else if(me.from==='Rafael Lazatin Memorial Medical Center' &&(me.to == 'Margot'||me.to=='Sapang Bato')){
      jeep1 = 'PAMPANG-HOLY';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep4 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.13914,120.58746';
      jeep2End = '15.13914,120.58746';
      jeep3End = '15.14186,120.58799';
      jeep4End = '15.16258,120.55349';
      me.getJeep(jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End,'back','back','forth','forth');
    }

    else if(me.from==='Rafael Lazatin Memorial Medical Center' &&me.to == 'Sacred Heart Medical Center'){
      jeep1 = 'PAMPANG-HOLY';
      jeep2 = 'VILLA-PAMPANG';
      jeep1End = '15.13914,120.58746';
      jeep2End = '15.138799,120.587541';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
    }

    else if((me.from==='Republic Central Colleges'||me.from=='Holy Family Medical Center') &&me.to=='Angeles City Hall'){
      jeep1 = 'PANDAN-PAMPANG';
      jeep1End = '15.16451,120.60811';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if((me.from==='Republic Central Colleges'||me.from=='Holy Family Medical Center') &&me.to=='Citi Center'){
      jeep1 = 'PANDAN-PAMPANG';
      jeep1End = '15.15181,120.60971';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if((me.from==='Republic Central Colleges'||me.from=='Holy Family Medical Center') &&me.to=='Marquee Mall'){
      jeep1 = 'PANDAN-PAMPANG';
      jeep1End = '15.162432,120.608675';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Republic Central Colleges' &&(me.to == 'Angeles Medical Center Inc.'||me.to=='Dr. Amando L. Garcia Medical Center, Inc.')){
      jeep1 = 'PANDAN-PAMPANG-Walking2';
      jeep2 = 'MARISOL-PAMPANG';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.137851,120.588826';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','forth');
    }

    else if(me.from==='Republic Central Colleges' &&(me.to=='Angeles University Foundation'||me.to=='Angeles University Foundation Medical Center')){
      jeep1 = 'PANDAN-PAMPANG-Walking2';
      jeep2 = 'MARISOL-PAMPANG';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.137851,120.588826';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','backp');
    }

    else if(me.from==='Republic Central Colleges'&&me.to=='Bancal'){
      jeep1 = 'PANDAN-PAMPANG-Walking2';
      jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.137851,120.588826';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
    }

    else if(me.from==='Republic Central Colleges' &&(me.to == 'Timog Park Gate 1' || me.to == 'Timog Park Gate 2' || me.to == 'Timog Park Gate 3' || me.to == 'Transfer' || me.to == 'Villa Sol'|| me.to == 'Anunas' ||me.to == 'Carmenville' || me.to == 'City College of Angeles' || me.to == 'Cuayan' || me.to == 'Friendship' || me.to == 'Friendship Plaza')){
      jeep1 = 'PANDAN-PAMPANG-Walking2';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.137851,120.588826';
      jeep3End = '15.14186,120.58799';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','back','forth');
    }

    else if(me.from==='Republic Central Colleges' &&(me.to == 'Timog Park Gate 1' || me.to == 'Timog Park Gate 2' || me.to == 'Timog Park Gate 3' || me.to == 'Transfer' || me.to == 'Villa Sol'|| me.to == 'Anunas' ||me.to == 'Carmenville' || me.to == 'City College of Angeles' || me.to == 'Cuayan' || me.to == 'Friendship' || me.to == 'Friendship Plaza')){
      jeep1 = 'PANDAN-PAMPANG-Walking2';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.137851,120.588826';
      jeep3End = '15.14186,120.58799';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','back','forth');
    }

    else if(me.from==='Republic Central Colleges' &&(me.to == 'Margot'||me.to=='Sapang Bato')){
      jeep1 = 'PANDAN-PAMPANG-Walking2';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep4 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.137851,120.588826';
      jeep3End = '15.14186,120.58799';
      jeep4End = '15.16258,120.55349';
      me.getJeep(jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End,'back','back','forth','forth');
    }

    else if(me.from==='Republic Central Colleges' &&(me.to == 'Diamond Subdivision' || me.to == 'Immaculate Concepcion Parish'||me.to == 'Main Gate Terminal'||me.to=='Marisol'||me.to=='SM City Clark'||me.to=="Saver's Mall"||me.to=='Systems Plus College Foundation'||me.to=='Lourdes North West')){
      jeep1 = 'PANDAN-PAMPANG-Walking2';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.137851,120.588826';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
    }

    else if(me.from==='Republic Central Colleges' &&(me.to == 'Holy Rosary Parish Church'||me.to == 'Jenra Mall'||me.to == 'Nepo Mall'||me.to == 'Holy Angel University'||me.to=='Sacred Heart Medical Center')){
      jeep1 = 'PANDAN-PAMPANG-Walking2';
      jeep2 = 'VILLA-PAMPANG';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.13784,120.58891';
      console.log('pp');
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'back','back');
    }
    else if(me.from==='Republic Central Colleges' &&(me.to == 'The Medical City Angeles'||me.to == 'Holy Family Medical Center')){
      jeep1 = 'PANDAN-PAMPANG-Walking2';
      jeep2 = 'VILLA-PAMPANG';
      jeep3 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.13784,120.58891';
      jeep3End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','back','back');
    }

    else if(me.from == 'Republic Central Colleges' && me.to == 'Rafael Lazatin Memorial Medical Center'){
      jeep1 = 'PANDAN-PAMPANG-Walking2';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'PAMPANG-HOLY';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.137851,120.588826';
      jeep3End = '15.13914,120.58746';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'back','back','forth');
    }

    else if(me.from == 'SM City Clark' && me.to == 'Bancal'){
      jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY-Walking';
      jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep1End = '15.166388,120.582832';
      jeep2End = '15.166388,120.582832';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,jeep3End,null,'back','forth');
    }

    else if(me.from == 'Main Gate Terminal' && me.to == 'Bancal'){
      jeep1 = 'CHECK-POINT-HENSONVILLE-HOLY-Walking2';
      jeep2 = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep1End = '15.166388,120.582832';
      jeep2End = '15.166388,120.582832';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,jeep3End,null,'back','forth');
    }

    else if(me.from == 'SM City Clark'&&me.to == 'Diamond Subdivision'){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep1End = '15.16253,120.59107';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if((me.from == 'SM City Clark'||me.from=='Main Gate Terminal')&&me.to == "Saver's Mall"){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep1End = '15.16242,120.59110';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if((me.from == 'SM City Clark'||me.from=='Main Gate Terminal')&&me.to == 'Systems Plus College Foundation'){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep1End = '15.15828,120.59222';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from == 'SM City Clark'&&(me.to=='Holy Angel University'||me.to=='Holy Rosary Parish Church'||me.to=='Sacred Heart Medical Center')){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep2 = 'VILLA-PAMPANG';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if(me.from == 'SM City Clark'&&(me.to=='Jenra Mall'||me.to=='Nepo Mall')){
      console.log('walking5');
      jeep1 = 'CHECK-POINT-HOLY';
      jeep2 = 'CHECK-POINT-HOLY-Walking5';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if((me.from==='SM City Clark') && me.to == 'Marisol'){
      jeep1 = 'CHECK-POINT-HOLY';
      jeep1End = '15.152765,120.591903';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth',null);
    }

    else if(me.from==='SM City Clark' && me.to == 'The Medical City Angeles'){
      jeep1  = 'CHECK-POINT-HOLY';
      jeep2  = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13642,120.58772';
      jeep2End = '15.13642,120.58772';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if(me.from==='Sacred Heart Medical Center' &&(me.to == 'Marquee Mall'||me.to == 'Citi Center'||me.to == 'Republic Central Colleges'||me.to == 'Angeles City Hall')){
      jeep1  = 'VILLA-PAMPANG';
      jeep2  = 'PANDAN-PAMPANG';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.13784,120.58891';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if(me.from==='Sacred Heart Medical Center' &&(me.to == 'Angeles Medical Center Inc.'||me.to=='Dr. Amando L. Garcia Medical Center, Inc.')){
      jeep1  = 'VILLA-PAMPANG';
      jeep2  = 'MARISOL-PAMPANG';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.137851,120.588826';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if(me.from==='Sacred Heart Medical Center' &&(me.to=='Angeles University Foundation Medical Center'||me.to=='Angeles University Foundation'||me.to=='Holy Family Medical Center'||me.to=='The Medical City Angeles')){
      jeep1  = 'VILLA-PAMPANG';
      jeep2  = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13357,120.59185';
      jeep2End = '15.13357,120.59185';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }

    else if(me.from==='Sacred Heart Medical Center' &&
    (me.to == 'Timog Park Gate 1' || me.to == 'Timog Park Gate 2' || me.to == 'Timog Park Gate 3' || me.to == 'Transfer' || me.to == 'Villa Sol' || me.to == 'Anunas' ||me.to == 'Carmenville' || me.to == 'City College of Angeles' || me.to == 'Cuayan' || me.to == 'Friendship' || me.to == 'Friendship Plaza')){
      jeep1 = 'VILLA-PAMPANG';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.137851,120.588826';
      jeep3End = '15.14186,120.58799';
      me.getJeep(jeep1,jeep2,jeep3,null,jeep1End,jeep2End,jeep3End,null,'forth','back','forth');
    }

    else if(me.from==='Sacred Heart Medical Center' &&
    (me.to == 'Margot'||me.to=='Sapang Bato')){
      jeep1 = 'VILLA-PAMPANG';
      jeep2 = 'CHECK-POINT-HOLY';
      jeep3 = 'SAPANG BATO-ANGELES';
      jeep4 = 'SAPANG BATO-ANGELES';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.137851,120.588826';
      jeep3End = '15.14186,120.58799';
      jeep4End = '15.16258,120.55349';
      me.getJeep(jeep1,jeep2,jeep3,jeep4,jeep1End,jeep2End,jeep3End,jeep4End,'forth','back','forth','forth');
    }
    else if(me.from==='Sacred Heart Medical Center' &&me.to == 'Bancal'){
      jeep1  = 'VILLA-PAMPANG';
      jeep2  = 'CHECK-POINT-HENSONVILLE-HOLY';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.137851,120.588826';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }
    else if(me.from==='Sacred Heart Medical Center' &&(me.to == 'Immaculate Concepcion Parish'||me.to == 'Marisol'||me.to == 'Main Gate Terminal'||me.to == 'SM City Clark'||me.to == 'Systems Plus College Foundation'||me.to == 'Diamond Subdivision'||me.to == "Saver's Mall"||me.to=='Lourdes North West')){
      jeep1  = 'VILLA-PAMPANG';
      jeep2  = 'CHECK-POINT-HOLY';
      jeep1End = '15.13784,120.58891';
      jeep2End = '15.137851,120.588826';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','back');
    }

    else if(me.from==='Sacred Heart Medical Center' &&(me.to == 'Holy Angel University')){
      jeep1  = 'VILLA-PAMPANG';
      jeep1End = '15.13417,120.59130';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Sacred Heart Medical Center' &&(me.to == 'Holy Rosary Parish Church')){
      jeep1  = 'VILLA-PAMPANG';
      jeep1End = '15.13483,120.59063';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Sacred Heart Medical Center' &&(me.to == 'Jenra Mall')){
      jeep1  = 'VILLA-PAMPANG';
      jeep1End = '15.13622,120.58805';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Sacred Heart Medical Center' &&(me.to == 'Nepo Mall')){
      jeep1  = 'VILLA-PAMPANG';
      jeep1End = '15.13567,120.58914';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='Sacred Heart Medical Center' &&(me.to == 'Rafael Lazatin Memorial Medical Center')){
      jeep1  = 'VILLA-PAMPANG';
      jeep2  = 'PAMPANG-HOLY';
      jeep1End = '15.138799,120.587541';
      jeep2End = '15.13914,120.58746';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if(me.from==='The Medical City Angeles'&&(me.to=='Angeles City Hall'||me.to=='Citi Center'||me.to=='Marquee Mall'||me.to=='Republic Central Colleges')){
      jeep1 = 'MARISOL-PAMPANG';
      jeep2 = 'PANDAN-PAMPANG';
      jeep1End = '15.137851,120.588826';
      jeep2End = '15.13784,120.58891';
      me.getJeep(jeep1,jeep2,null,null,jeep1End,jeep2End,null,null,'forth','forth');
    }

    else if(me.from==='The Medical City Angeles'&&me.to=='Angeles Medical Center Inc.'){
      jeep1 = 'MARISOL-PAMPANG';
      jeep1End = '15.14124,120.58907';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'forth');
    }

    else if(me.from==='The Medical City Angeles'&&me.to=='Angeles University Foundation Medical Center'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.14527,120.59539';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if(me.from==='The Medical City Angeles'&&me.to=='Angeles University Foundation'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.14544,120.59530';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

    else if(me.from==='The Medical City Angeles'&&me.to=='Holy Family Medical Center'){
      jeep1 = 'CHECK-POINT-HOLY-HI-WAY';
      jeep1End = '15.13990,120.59450';
      me.getJeep(jeep1,null,null,null,jeep1End,null,null,null,'back');
    }

  }
  getJeep(jeep1,jeep2,jeep3,jeep4,end1,end2,end3,end4,ctr1,ctr2,ctr3,ctr4){
    var me = this;

    var data;
    var pointMarker2;
    var options = {};

    //jeep with 1 ride
    if (jeep2===null&&end2===null) {
        // options = {};
        options.end1 = end1;
        options.ctr1 = '1ride';
        options.ctr2 = ctr1;
        if (me.from=='Citi Center'&&(me.to!='Marquee Mall'&&me.to!='Angeles City Hall')) {
          console.log('cpoint');
          options.jeep_1= {coordi:'15.13784,120.58891|15.138251,120.589309|15.13927,120.59037|15.139734,120.590832|15.140435,120.591892|15.13884,120.593694|15.141057,120.595272|15.142838,120.596806|15.142905,120.596838|15.144619,120.59804|15.14872,120.601398|15.15103,120.603383|15.15372,120.60482|15.153224,120.605907|15.153255,120.605942|15.152749,120.607052|15.15239,120.60829|15.15181,120.60971|15.15181,120.60971|15.15239,120.60829|15.152749,120.607052|15.153255,120.605942|15.153224,120.605907|15.15372,120.60482|15.153783,120.604851|15.15366,120.604734|15.152624,120.60423|15.15103,120.603383|15.14872,120.601398|15.147082,120.600081|15.144619,120.59804|15.142913,120.596736|15.140787,120.595111|15.13990,120.59450|15.13834,120.59335|15.137245,120.592482|15.136417,120.590765|15.137761,120.588912|15.13784,120.58891|15.138251,120.589309|15.13927,120.59037',name:'PANDAN-PAMPANG',color:'Blue'};
        }

        else if(jeep1==='MARISOL-PAMPANG-Walking'&&(((me.from == 'Angeles Medical Center Inc.'||me.from=='Dr. Amando L. Garcia Medical Center, Inc.' ))&& me.to==='Lourdes North West')){
          options.jeep_1= {coordi:'15.14254,120.58971|15.14124,120.58907|15.14131,120.58783|15.14186,120.58799',name:'Walk through',color:'#FF7F50'};
        }
        else if (jeep1==='SAPANG BATO-ANGELES-walking'&&me.from=='Carmenville'&&me.to=='Timog Park Gate 1') {
          options.jeep_1= {coordi:'15.14539,120.56643|15.14505,120.56465',name:'Walk through',color:'#FF7F50'};
        }
        else if (jeep1==='MARISOL-PAMPANG-Walking'&&me.from=='Angeles Medical Center Inc.'&&me.to=='Dr. Amando L. Garcia Medical Center, Inc.') {
          options.jeep_1= {coordi:'15.14124,120.58907|15.14124,120.58907|15.14254,120.58971|15.14254,120.58971',name:'Walk through',color:'#FF7F50'};
          console.log('cr.');
          console.log(options);
        }
        else if (jeep1==='MARISOL-PAMPANG-Walking'&&me.to=='Angeles Medical Center Inc.'&&me.from=='Dr. Amando L. Garcia Medical Center, Inc.') {
          options.jeep_1= {coordi:'15.14254,120.58971|15.14254,120.58971|15.14124,120.58907|15.14124,120.58907',name:'Walk through',color:'#FF7F50'};
          console.log('cr.');
          console.log(options);
        }
        else {
          data = me.getJeepDocs(jeep1)
            .then((result) => {
              console.log(result);
              options.jeep_1 = result;
              return options;
            });
        }
        pointMarker2 = me.getJeepMarkers(me.from).then((result) => {


          if (me.from=='Marisol'&&(me.to=='Angeles Medical Center Inc.'||me.to=='Angeles University Foundation Medical Center'||me.to=='Angeles University Foundation'||me.to=='Dr. Amando L. Garcia Medical Center, Inc.'||me.to=='Holy Family Medical Center'||me.to == 'Holy Rosary Parish Church'||me.to=='Holy Angel University'||me.to=='Jenra Mall'||me.to=='Nepo Mall'||me.to=='Lourdes North West'||me.to == 'The Medical City Angeles')) {
            console.log('marisss');
            endCtrl = '15.15259,120.59180';
            mk2 = endCtrl.split(",");
            options.marker_1 = {lat:mk2[0],lng:mk2[1]};
            options.marker_1.text = 'Marisol Terminal';
            console.log(options);
          }
          else {console.log('qq');
            options.marker_1 = result;
          }

          return me.getJeepMarkers(me.to);
        }).then((result) => {
          options.marker_2 = result;
          options.fromId = me.from;
          options.toId = me.to;
          return options;
        });
        data.then((result) => {
          return pointMarker2;
        }).then((result) => {
          me.googleMapsService.loadGoogleMaps(options);
        });
    }
    else if (jeep3!==null) {
      options = {};
      if (me.from=='Citi Center') {
        console.log('cpoint');
        options.jeep_1= {coordi:'15.13784,120.58891|15.138251,120.589309|15.13927,120.59037|15.139734,120.590832|15.140435,120.591892|15.13884,120.593694|15.141057,120.595272|15.142838,120.596806|15.142905,120.596838|15.144619,120.59804|15.14872,120.601398|15.15103,120.603383|15.15372,120.60482|15.153224,120.605907|15.153255,120.605942|15.152749,120.607052|15.15239,120.60829|15.15181,120.60971|15.15181,120.60971|15.15239,120.60829|15.152749,120.607052|15.153255,120.605942|15.153224,120.605907|15.15372,120.60482|15.153783,120.604851|15.15366,120.604734|15.152624,120.60423|15.15103,120.603383|15.14872,120.601398|15.147082,120.600081|15.144619,120.59804|15.142913,120.596736|15.140787,120.595111|15.13990,120.59450|15.13834,120.59335|15.137245,120.592482|15.136417,120.590765|15.137761,120.588912|15.13784,120.58891|15.138251,120.589309|15.13927,120.59037',name:'PANDAN-PAMPANG',color:'Blue'};
        data = me.getJeepDocs(jeep2).then((result) => {
          options.jeep_2 = result;
          console.log(result);
          return me.getJeepDocs(jeep3);
        }).
        then((result) => {
          options.jeep_3 = result;
          return options;
        });
      }
      else if (jeep1==='MARISOL-PAMPANG-Walking'&&jeep2!=='SAPANG BATO-ANGELES') {
        options.jeep_1= {coordi:'15.14254,120.58971|15.14124,120.58907|15.14131,120.58783',name:'Walk through',color:'#FF7F50'};
        console.log('oooo1');
        data = me.getJeepDocs(jeep2).then((result) => {
          options.jeep_2 = result;
          console.log(result);
          return me.getJeepDocs(jeep3);
        }).
        then((result) => {
          options.jeep_3 = result;
          return options;
        });
      }
      else if (jeep1==='MARISOL-PAMPANG-Walking'&&jeep2=='SAPANG BATO-ANGELES') {
        options.jeep_1= {coordi:'15.14254,120.58971|15.14124,120.58907|15.14131,120.58783|15.14186,120.58799',name:'Walk through',color:'#FF7F50'};
        console.log('oooo2');
        data = me.getJeepDocs(jeep2).then((result) => {
          options.jeep_2 = result;
          console.log(result);
          return me.getJeepDocs(jeep3);
        }).
        then((result) => {
          options.jeep_3 = result;
          return options;
        });
      }
      else if (jeep1==='MARISOL-PAMPANG-Walking2'&&jeep2=='MARISOL-PAMPANG') {
        options.jeep_1= {coordi:'15.13417,120.59130|15.13483,120.59063',name:'Walk through',color:'#FF7F50'};
        console.log('oooo3');
        data = me.getJeepDocs(jeep2).then((result) => {
          options.jeep_2 = result;
          console.log(result);
          return me.getJeepDocs(jeep3);
        }).
        then((result) => {
          options.jeep_3 = result;
          return options;
        });
      }
      else if (jeep1==='MARISOL-PAMPANG-Walking3'&&jeep2=='CHECK-POINT-HOLY') {
        options.jeep_1= {coordi:'15.13417,120.59130|15.13642,120.58772',name:'Walk through',color:'#FF7F50'};
        console.log('oooo4');
        data = me.getJeepDocs(jeep2).then((result) => {
          options.jeep_2 = result;
          console.log(result);
          return me.getJeepDocs(jeep3);
        }).
        then((result) => {
          options.jeep_3 = result;
          return options;
        });
      }
      else if (jeep1==='MARISOL-PAMPANG-Walking5'&&jeep2=='CHECK-POINT-HOLY') {
        options.jeep_1= {coordi:'15.13567,120.58914|15.13622,120.58805|15.13642,120.58772',name:'Walk through',color:'#FF7F50'};
        console.log('oooo4');
        data = me.getJeepDocs(jeep2).then((result) => {
          options.jeep_2 = result;
          console.log(result);
          return me.getJeepDocs(jeep3);
        }).
        then((result) => {
          options.jeep_3 = result;
          return options;
        });
      }
      else if (jeep1==='CHECK-POINT-HOLY-Walking4'&&jeep2=='CHECK-POINT-HOLY') {
        options.jeep_1= {coordi:'15.15293,120.59217|15.152962,120.591914|15.15259,120.59180',name:'Walk through',color:'#FF7F50'};
        console.log('moooo4');
        data = me.getJeepDocs(jeep2).then((result) => {
          options.jeep_2 = result;
          console.log(result);
          return me.getJeepDocs(jeep3);
        }).
        then((result) => {
          options.jeep_3 = result;
          return options;
        });
      }
      else if (jeep1==='PANDAN-PAMPANG-Walking2'&&(jeep2=='CHECK-POINT-HOLY'||jeep2=='VILLA-PAMPANG')) {
        options.jeep_1= {coordi:'15.13927,120.59037|15.138251,120.589309|15.13784,120.58891',name:'Walk through',color:'#FF7F50'};
        console.log('moooo4');
        data = me.getJeepDocs(jeep2).then((result) => {
          options.jeep_2 = result;
          console.log(result);
          return me.getJeepDocs(jeep3);
        }).
        then((result) => {
          options.jeep_3 = result;
          return options;
        });
      }
      else {
        data = me.getJeepDocs(jeep1).then((result) => {
          options.jeep_1 = result;
          return me.getJeepDocs(jeep2);
        }).then((result) => {
          console.log(';jeeeep2');
          options.jeep_2 = result;
          return me.getJeepDocs(jeep3);
        }).then((result) => {
          options.jeep_3 = result;
          return options;
        });
      }


      if (jeep4!==null) {
        me.getJeepDocs(jeep4).then((result) => {
          console.log(result);
          console.log('asdf');
          options.jeep_4 = result;
        });
      }
      pointMarker2 = me.getJeepMarkers(me.from).then((result) => {
        options.marker_1 = result;
        console.log(result);
        var endCtr;
        if (jeep1==='MARISOL-PAMPANG-Walking'&&jeep2!=='SAPANG BATO-ANGELES') {
          endCtr = '15.14131,120.58783';
          console.log('endCtr');
        }
        else if (jeep3!==undefined&&(me.from=='Anunas'||me.from=='Carmenville'||me.from=='City College of Angeles'||me.from=='Cuayan'||me.from=='Friendship'||me.from=='Friendship Plaza'||me.from=='Margot'||me.from=='Sapang Bato'||me.from=='Timog Park Gate 1'||me.from=='Timog Park Gate 2'||me.from=='Timog Park Gate 3'||me.from=='Timog Park Gate 3'||me.from=='Transfer'||me.from=='Villa Sol')&&(me.to=='Angeles City Hall'||me.to=='Citi Center'||me.to=='Marquee Mall'||me.to=='Republic Central Colleges')) {
          endCtr = '15.137851,120.588826';
        }
        else if (jeep3!==undefined&&(me.from=='Anunas'||me.from=='Carmenville'||me.from=='City College of Angeles'||me.from=='Cuayan'||me.from=='Friendship'||me.from=='Friendship Plaza'||me.from=='Margot'||me.from=='Sapang Bato'||me.from=='Timog Park Gate 1'||me.from=='Timog Park Gate 2'||me.from=='Timog Park Gate 3'||me.from=='Transfer'||me.from=='Villa Sol')&&(me.to=='Angeles University Foundation'||me.to=='Angeles University Foundation Medical Center')) {
          endCtr = '15.138817,120.587592';
        }
        else if (jeep3!==undefined&&me.from=='Anunas'&&me.to=='Dr. Amando L. Garcia Medical Center, Inc.') {
          endCtr = '15.14254,120.58971';
        }
        else if (jeep3!==undefined&&me.from=='Anunas'&&me.to=='Sacred Heart Medical Center') {
          endCtr = '15.13642,120.58772';
        }
        else if (jeep3!==undefined&&me.from=='Angeles City Hall'&&me.to=='Rafael Lazatin Memorial Medical Center') {
          endCtr = '15.13914,120.58746';
        }
        else if (jeep3!==undefined&&me.from=='Rafael Lazatin Memorial Medical Center'&&(me.to=='Angeles City Hall'||me.to=='Citi Center'||me.to=='Marquee Mall'||me.to=='Republic Central Colleges')) {
          endCtr = '15.13914,120.58746';
        }
        else if (jeep1==='MARISOL-PAMPANG-Walking2'&&jeep3!==undefined&&me.from=='Holy Angel University'&&(me.to=='Angeles City Hall'||me.to=='Citi Center'||me.to=='Marquee Mall'||me.to=='Republic Central Colleges')) {
          console.log('holi');
          endCtr = '15.137851,120.588826';
        }
        else if (jeep1==='MARISOL-PAMPANG-Walking2'&&jeep3!==undefined&&me.from=='Holy Angel University'&&(me.to=='Bancal'||me.to=='Lourdes North West')) {
          console.log('holi');
          endCtr = '15.13642,120.58772';
        }
        else if (jeep1==='CHECK-POINT-HOLY-Walking4'&&jeep3!==undefined&&me.from=='Marisol'&&(me.to == 'Timog Park Gate 1' || me.to == 'Timog Park Gate 2' || me.to == 'Timog Park Gate 3' || me.to == 'Transfer' || me.to == 'Villa Sol'|| me.to == 'Anunas' ||me.to == 'Carmenville' || me.to == 'City College of Angeles' || me.to == 'Cuayan' || me.to == 'Friendship' || me.to == 'Friendship Plaza')) {
          console.log('cp4');
          endCtr = '15.14186,120.58799';
        }
        else if (jeep4!==undefined&&(me.to=='Margot'||me.to=='Sapang Bato')) {
          console.log('jeep4 margt');
          endCtr = '15.16258,120.55349';
          var mk3 = endCtr.split(",");
          options.marker_3 = {lat:mk3[0],lng:mk3[1]};
        }
        else if (jeep4!==undefined&&me.from=='Holy Angel University'&&(me.to == 'Timog Park Gate 1' || me.to == 'Timog Park Gate 2' || me.to == 'Timog Park Gate 3' || me.to == 'Transfer' || me.to == 'Villa Sol'|| me.to == 'Anunas' ||me.to == 'Carmenville' || me.to == 'City College of Angeles' || me.to == 'Cuayan' || me.to == 'Friendship' || me.to == 'Friendship Plaza')) {
          console.log('jeep4 margt');
          endCtr = '15.14186,120.58799';
          var mk3a = endCtr.split(",");
          options.marker_3 = {lat:mk3a[0],lng:mk3a[1]};
        }
        else {
          endCtr = end3;
        }
        var mk2;
        var endCtrl;
        if (jeep4!==undefined&&(me.to=='Margot'||me.to=='Sapang Bato')) {
          endCtrl = '15.14186,120.58799';
          mk2 = endCtrl.split(",");
          options.marker_2 = {lat:mk2[0],lng:mk2[1]};
        }
        else if (jeep4!==undefined&&me.from=='Holy Angel University'&&(me.to == 'Timog Park Gate 1' || me.to == 'Timog Park Gate 2' || me.to == 'Timog Park Gate 3' || me.to == 'Transfer' || me.to == 'Villa Sol'|| me.to == 'Anunas' ||me.to == 'Carmenville' || me.to == 'City College of Angeles' || me.to == 'Cuayan' || me.to == 'Friendship' || me.to == 'Friendship Plaza')) {
          endCtrl = '15.13642,120.58772';
          mk2 = endCtrl.split(",");
          options.marker_2 = {lat:mk2[0],lng:mk2[1]};
        }
        else {
          mk2 = endCtr.split(",");
          options.marker_2 = {lat:mk2[0],lng:mk2[1]};
        }
        return me.getJeepMarkers(me.to);
      }).then((result2) => {
        console.log(result2);
        console.log('jeeeep4');
        if (jeep4!==null) {
          options.marker_4 = result2;
        }
        else {
          options.marker_3 = result2;
        }
        return options;
    });
      options.end1 = end1;
      options.end2 = end2;
      options.end3 = end3;
      options.end4 = end4;
      options.ctr1=ctr1;
      options.ctr2=ctr2;
      options.ctr3=ctr3;
      options.ctr4=ctr4;
      options.fromId = me.from;
      options.toId = me.to;

      // data.then((result) => {
      //   console.log('jeep3');
      //   console.log(options.jeep_3);
      //   console.log(options.marker_3);
      //   me.googleMapsService.loadGoogleMaps(options);
      // });
      data.then((result) => {
        return pointMarker2;
      }).then((result) => {
        console.log('jeep3');
        console.log(options.jeep_3);
        console.log(options.marker_3);
        me.googleMapsService.loadGoogleMaps(options);
      });

    }
    else{
    console.log('2jeep');
    console.log(me.to);
        options = {};

        if (me.from=='Citi Center') {
          console.log('cpoint');
          options.jeep_1= {coordi:'15.13784,120.58891|15.138251,120.589309|15.13927,120.59037|15.139734,120.590832|15.140435,120.591892|15.13884,120.593694|15.141057,120.595272|15.142838,120.596806|15.142905,120.596838|15.144619,120.59804|15.14872,120.601398|15.15103,120.603383|15.15372,120.60482|15.153224,120.605907|15.153255,120.605942|15.152749,120.607052|15.15239,120.60829|15.15181,120.60971|15.15181,120.60971|15.15239,120.60829|15.152749,120.607052|15.153255,120.605942|15.153224,120.605907|15.15372,120.60482|15.153783,120.604851|15.15366,120.604734|15.152624,120.60423|15.15103,120.603383|15.14872,120.601398|15.147082,120.600081|15.144619,120.59804|15.142913,120.596736|15.140787,120.595111|15.13990,120.59450|15.13834,120.59335|15.137245,120.592482|15.136417,120.590765|15.137761,120.588912|15.13784,120.58891|15.138251,120.589309|15.13927,120.59037',name:'PANDAN-PAMPANG',color:'Blue'};
          var data4 = me.getJeepDocs(jeep2).then((result) => {
            console.log(result);
            options.jeep_2 = result;
            return options;
          });
        }

        else if (jeep1==='MARISOL-PAMPANG-Walking'&&jeep2!=='SAPANG BATO-ANGELES') {
          console.log('a1');
          options.jeep_1= {coordi:'15.14254,120.58971|15.14124,120.58907|15.14131,120.58783',name:'Walk through',color:'#FF7F50'};
          var data2 = me.getJeepDocs(jeep2).then((result) => {
            options.jeep_2 = result;

            console.log(result);
            return options;
          });
          console.log('walking');

        }
        else if (jeep1==='MARISOL-PAMPANG-Walking'&&jeep2==='SAPANG BATO-ANGELES') {
          console.log('a2');
          options.jeep_1= {coordi:'15.14254,120.58971|15.14124,120.58907|15.14131,120.58783|15.14186,120.58799',name:'Walk through',color:'#FF7F50'};
          data = me.getJeepDocs(jeep2).then((result) => {
            options.jeep_2 = result;
            return options;
          });
          console.log('walking2 holy');

        }
        else if (jeep1==='SAPANG BATO-ANGELES'&&jeep2==='MARISOL-PAMPANG-Walking') {
          console.log('a2a');
          options.jeep_2= {coordi:'15.14186,120.58799|15.14131,120.58783|15.14124,120.58907|15.14254,120.58971',name:'Walk through',color:'#FF7F50'};
          data = me.getJeepDocs(jeep1).then((result) => {
            options.jeep_1 = result;
            return options;
          });
        }
        else if (jeep1==='MARISOL-PAMPANG'&&jeep2==='MARISOL-PAMPANG-Walking4') {
          options.jeep_2= {coordi:'15.13483,120.59063|15.13417,120.59130',name:'Walk through',color:'#FF7F50'};
          data = me.getJeepDocs(jeep1).then((result) => {
            options.jeep_1 = result;
            return options;
          });
        }
        else if (jeep1==='MARISOL-PAMPANG'&&jeep2==='VILLA-PAMPANG-Walking') {
          console.log('a3');
          options.jeep_2= {coordi:'15.13483,120.59063|15.13417,120.59130',name:'Walk through',color:'#FF7F50'};
          data = me.getJeepDocs(jeep1).then((result) => {
            console.log(result);
            options.jeep_1 = result;
            return options;
          });
        }
        else if (jeep1=='CHECK-POINT-HENSONVILLE-HOLY'&&jeep2=='CHECK-POINT-HOLY-Walking'){
          console.log('cpoint');
          options.jeep_2= {coordi:'15.13642,120.58772|15.13622,120.58805|15.13567,120.58914',name:'Walk through',color:'#FF7F50'};
          data = me.getJeepDocs(jeep1).then((result) => {
            console.log(result);
            options.jeep_1 = result;
            return options;
          });
        }
        else if (jeep1=='PANDAN-PAMPANG-Walking'&&jeep2=='PANDAN-PAMPANG'){
          console.log('cpoint');
          options.jeep_1= {coordi:'15.13567,120.58914|15.13622,120.58805|15.137851,120.588826',name:'Walk through',color:'#FF7F50'};
          data = me.getJeepDocs(jeep2).then((result) => {
            console.log(result);
            options.jeep_2 = result;
            return options;
          });
        }
        else if (jeep1=='PANDAN-PAMPANG-Walking2'&&(jeep2=='MARISOL-PAMPANG'||jeep2=='CHECK-POINT-HENSONVILLE-HOLY'||jeep2=='CHECK-POINT-HOLY'||jeep2=='VILLA-PAMPANG')){
          console.log('cpoint');
          options.jeep_1= {coordi:'15.13927,120.59037|15.138251,120.589309|15.13784,120.58891',name:'Walk through',color:'#FF7F50'};
          data = me.getJeepDocs(jeep2).then((result) => {
            console.log(result);
            console.log('kk');
            options.jeep_2 = result;
            return options;
          });
        }
        else if (jeep1==='CHECK-POINT-HENSONVILLE-HOLY'&&jeep2==='CHECK-POINT-HOLY-Walking2'){
          console.log('cpoint2');
          options.jeep_2= {coordi:'15.166388,120.582832|15.167272,120.584398|15.16840,120.58442',name:'Walk through',color:'#FF7F50'};
          console.log('jeep waliking');
          console.log(options.jeep_2);
          data = me.getJeepDocs(jeep1).then((result) => {
            console.log(result);
            options.jeep_1 = result;
            return options;
          });
          console.log(options);
        }
        else if (jeep1==='CHECK-POINT-HENSONVILLE-HOLY'&&jeep2==='CHECK-POINT-HOLY-Walking3'){
          console.log('cpoint2');
          options.jeep_2= {coordi:'15.166388,120.582832|15.167272,120.584398|15.16834,120.58275',name:'Walk through',color:'#FF7F50'};
          console.log('jeep waliking');
          console.log(options.jeep_2);
          data = me.getJeepDocs(jeep1).then((result) => {
            console.log(result);
            options.jeep_1 = result;
            return options;
          });
          console.log(options);
        }
        else if (jeep1==='MARISOL-PAMPANG-Walking2'&&jeep2==='MARISOL-PAMPANG'){
          console.log('walking 2');
          options.jeep_1= {coordi:'15.13417,120.59130|15.13483,120.59063',name:'Walk through',color:'#FF7F50'};
          data = me.getJeepDocs(jeep2).then((result) => {
            console.log(result);
            options.jeep_2 = result;
            return options;
          });
          console.log(options);
        }
        else if (jeep1==='MARISOL-PAMPANG-Walking5'&&(jeep2=='CHECK-POINT-HENSONVILLE-HOLY'||jeep2=='CHECK-POINT-HOLY')) {
          options.jeep_1= {coordi:'15.13567,120.58914|15.13622,120.58805|15.13642,120.58772',name:'Walk through',color:'#FF7F50'};
          console.log('oooo4');
          data = me.getJeepDocs(jeep2).then((result) => {
            options.jeep_2 = result;
            console.log(result);
            return options;
          });
        }
        else if (jeep1==='MAINGATE-FRIENDSHIP-Walking'&&jeep2=='MAINGATE-FRIENDSHIP') {
          options.jeep_1= {coordi:'15.16840,120.58442|15.166427,120.583066',name:'Walk through',color:'#FF7F50'};
          console.log('oooo4');
          data = me.getJeepDocs(jeep2).then((result) => {
            options.jeep_2 = result;
            console.log(result);
            return options;
          });
        }
        else if (jeep1==='CHECK-POINT-HENSONVILLE-HOLY-Walking'&&jeep2=='CHECK-POINT-HENSONVILLE-HOLY') {
          options.jeep_1= {coordi:'15.16834,120.58275|15.166388,120.582832',name:'Walk through',color:'#FF7F50'};
          console.log('oooo4');
          data = me.getJeepDocs(jeep2).then((result) => {
            options.jeep_2 = result;
            console.log(result);
            return options;
          });
        }
        else if (jeep1==='CHECK-POINT-HENSONVILLE-HOLY-Walking2'&&jeep2=='CHECK-POINT-HENSONVILLE-HOLY') {
          options.jeep_1= {coordi:'15.16840,120.58442|15.166388,120.582832',name:'Walk through',color:'#FF7F50'};
          console.log('oooo4');
          data = me.getJeepDocs(jeep2).then((result) => {
            options.jeep_2 = result;
            console.log(result);
            return options;
          });
        }
        else if (jeep2==='CHECK-POINT-HOLY-Walking5'&&jeep1=='CHECK-POINT-HOLY') {
          options.jeep_2= {coordi:'15.13642,120.58772|15.13622,120.58805|15.13567,120.58914',name:'Walk through',color:'#FF7F50'};
          console.log('oooo4');
          data = me.getJeepDocs(jeep1).then((result) => {
            options.jeep_1 = result;
            console.log(result);
            return options;
          });
        }

        else {
          console.log('elses');
          data = me.getJeepDocs(jeep1)
            .then((result) => {
              console.log(result);
              options.jeep_1 = result;
              return me.getJeepDocs(jeep2);
            })
            .then((result) => {
              options.jeep_2 = result;
              return options;
            });
        }
        console.log(me.to);

        pointMarker2 = me.getJeepMarkers(me.from).then((result) => {
          console.log(me.to);

          if (me.from=='Marisol'&&(me.to=='Angeles City Hall'||me.to=='Citi Center'||me.to=='Marquee Mall'||me.to=='Republic Central Colleges'||me.to=='Sacred Heart Medical Center')) {
            endCtrl = '15.15259,120.59180';
            mk2 = endCtrl.split(",");
            options.marker_1 = {lat:mk2[0],lng:mk2[1]};
            options.marker_1.text = 'Marisol Terminal';
            console.log(options);
            console.log('1122');
          }
          else if (me.from=='Marisol' &&me.to == 'Rafael Lazatin Memorial Medical Center') {
            endCtrl = '15.15259,120.59180';
            mk2 = endCtrl.split(",");
            options.marker_1 = {lat:mk2[0],lng:mk2[1]};
            options.marker_1.text = 'Marisol';
            console.log(options);
          }


          else {
            options.marker_1 = result;
          }


          console.log('mm');
          console.log(result);
          console.log(me.to);
          return me.getJeepMarkers(me.to);
        }).then((result2) => {
          console.log(result2);
          options.marker_2 = result2;
          return options;
        });

        options.end1 = end1;
        options.end2 = end2;
        console.log(end2);
        options.ctr1 = ctr1;
        options.ctr2 = ctr2;

        options.fromId = me.from;
        options.toId = me.to;

        pointMarker2.then((result) => {
          me.googleMapsService.loadGoogleMaps(options);
        });
    }
  }
  getJeepDocs(jeep){
    console.log('details');
    var jeepDocs = {};

    return this.dataService.getJeepDetails(jeep).then((data) => {
      if(data.res.rows.length > 0) {
        for(var i = 0; i < data.res.rows.length; i++) {
          // jeepDocs.push(name: data.res.rows.item(i).name, color: data.res.rows.item(i).color, image:data.res.rows.item(i).image, coordi:data.res.rows.item(i).coordi);
          jeepDocs.name = data.res.rows.item(i).name;
          jeepDocs.color = data.res.rows.item(i).color;
          jeepDocs.image = data.res.rows.item(i).image;
          jeepDocs.coordi = data.res.rows.item(i).coordi;
        }
      }
      console.log(jeepDocs);
      return jeepDocs;
    }, (error) => {
      console.log(error);
    });
  }

  getJeepMarkers(points){
    console.log(points);
    var jeepMarks = {};
    return this.dataService.getPointsOrigin(points).then((data) => {
      if(data.res.rows.length > 0) {
        for(var i = 0; i < data.res.rows.length; i++) {
          // jeepDocs.push(name: data.res.rows.item(i).name, color: data.res.rows.item(i).color, image:data.res.rows.item(i).image, coordi:data.res.rows.item(i).coordi);
          jeepMarks.text = data.res.rows.item(i).text;
          jeepMarks.lat = data.res.rows.item(i).lat;
          jeepMarks.lng = data.res.rows.item(i).lng;
          jeepMarks.icon = data.res.rows.item(i).icon;

        }
      }
      console.log(jeepMarks);
      return jeepMarks;
    }, (error) => {
      console.log(error);
    });
  }



}
