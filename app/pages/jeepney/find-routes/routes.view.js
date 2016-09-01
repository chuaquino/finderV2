import {Component} from '@angular/core';
import {Modal, NavController, AlertController, ModalController} from 'ionic-angular';
import {MyModal} from '../../jeepney/find-routes/modal';
import {RoutesMapsPage} from '../../jeepney/find-routes/routes.map';
import {TranslatePipe} from '../../../pipes/translate';

@Component({
  templateUrl: 'build/pages/jeepney/find-routes/routes.view.html',
  pipes: [TranslatePipe]
})

export class FindRoutesPage {
  static get parameters(){
    return [[NavController],[ModalController],[AlertController]];
  }

  constructor(nav,modal,alert){
    this.nav = nav;
    this.modal = modal;
    this.alert = alert;

    this.from = 'Choose starting point';
    this.to = 'Choose destination';

    console.log(this.from);

    // this.modal = modal;
  }
  showModal(ctr){

    var me = this;
    var trans = [{
      "アンヘレスシティホール":"Angeles City Hall",
      "Angeles Medical Center Inc.":"Angeles Medical Center Inc.",
      "アンヘレスユニバーシティファウンデーション":"Angeles University Foundation",
      "AUF メディカルセンター":"Angeles University Foundation Medical Center",
      "アヌナス":"Anunas",
      "バンカル":"Bancal",
      "Carmenville":"Carmenville",
      "シティセンター":"Citi Center",
      "アンヘレスシティ大学":"City College of Angeles",
      "Cuayan":"Cuayan",
      "ダイアモンドサブディビジョン":"Diamond Subdivision",
      "Dr. Amando L. Garcia Medical Center, Inc.":"Dr. Amando L. Garcia Medical Center, Inc.",
      "フィールズアベニュー":"Fields Avenue",
      "フレンドシップ":"Friendship",
      "フレンドシッププラザ":"Friendship Plaza",
      "ホリーエンジェル大学":"Holy Angel University",
      "ホリーファミリーメディカルセンター":"Holy Family Medical Center",
      "Holy Rosary Parish Church":"Holy Rosary Parish Church",
      "イマキュレートコンセプションパリッシュ":"Immaculate Concepcion Parish",
      "Jenra Mall":"Jenra Mall",
      "ルーデスノースウェスト":"Lourdes North West",
      "メインゲートターミナル":"Main Gate Terminal",
      "マーゴット":"Margot",
      "マリソル":"Marisol",
      "マーキーモール":"Marquee Mall",
      "Nepo Mall":"Nepo Mall",
      "ラファエルラサティンメモリアルメディカルセンター":"Rafael Lazatin Memorial Medical Center",
      "リパブリックセントラルコレッジズ":"Republic Central Colleges",
      "SMシティクラーク":"SM City Clark",
      "サクレッドハートメディカルセンター":"Sacred Heart Medical Center",
      "サパンベイトー":"Sapang Bato",
      "Saver\'s Mall":"Saver\'s Mall",
      "システムズプラスカレッジファウンデーション":"Systems Plus College Foundation",
      "ザメディカルシティ - アンヘレス":"The Medical City Angeles",
      "チモグパークゲート1":"Timog Park Gate 1",
      "チモグパークゲート 2":"Timog Park Gate 2",
      "チモグパークゲート 3":"Timog Park Gate 3",
      "トランスファ":"Transfer",
      "Villa Sol":"Villa Sol",
    }];
    console.log(ctr);
    let profileModal = me.modal.create(MyModal, { ctrId: ctr });
    profileModal.onDidDismiss(data => {
      console.log(data);
      console.log(data!=undefined);
      if (data!=undefined) {
        if (ctr=='from') {
          if (navigator.language.split('-')[0]=='ja') {
            this.from = trans[0][data.point];
          }
          else {
            this.from = data.point;
          }

        }
        else if (ctr=='to') {
          if (navigator.language.split('-')[0]=='ja') {
            this.to = trans[0][data.point];
          }
          else {
            this.to = data.point;
          }
        }
      }


      // console.log(data.point);
    });
    profileModal.present();
  }
  submitForm(from,to){
    var me = this;

    var transTitle;

    if (navigator.language.split('-')[0]=='ja') {
      transTitle = "アラート";
    }
    else {
      transTitle = "Alert";
    }



    if(from == 'Choose starting point' || to == 'Choose destination'){
      console.log(from+"-"+to);
      let alert = me.alert.create({
        title: transTitle,
        subTitle: 'Empty Fields! Please select starting point or destination.',
        buttons: ['OK']
      });
      alert.present();
    }
    else if (from == to) {
      let alert = me.alert.create({
        title: transTitle,
        subTitle: 'Starting point and destination must not be the',
        buttons: ['OK']
      });
      alert.present();
    }
    else if (from == to) {
      me.alertBox('Alert','Starting point and destination must not be the same.');
    }
    else if (from =="Angeles City Hall" && to == "Marquee Mall") {
      me.alertBox(to);
    }
    else if (from == "Marquee Mall"&&to =="Angeles City Hall") {
      me.alertBox(to);
    }
    else if (from =="Main Gate Terminal" && to == "SM City Clark") {
      me.alertBox(to);
    }
    else if (from == "SM City Clark"&&to =="Main Gate Terminal") {
      me.alertBox(to);
    }
    else if (from == 'Angeles University Foundation' && to== 'Angeles University Foundation Medical Center') {
      me.alertBox(to);
    }
    else if (from == 'Angeles University Foundation Medical Center' && to== 'Angeles University Foundation') {
      me.alertBox(to);
    }
    else if (from == 'Holy Angel University' && to== 'Holy Rosary Parish Church') {
      me.alertBox(to);
    }
    else if (from == 'Holy Rosary Parish Church' && to== 'Holy Angel University') {
      me.alertBox(to);
    }
    else if (from == 'Immaculate Concepcion Parish' && to== 'Systems Plus College Foundation') {
      me.alertBox(to);
    }
    else if (from== 'Systems Plus College Foundation' && to == 'Immaculate Concepcion Parish') {
      me.alertBox(to);
    }
    else if (from == 'Friendship Plaza' && to== 'Timog Park Gate 3') {
      me.alertBox(to);
    }
    else if (from== 'Timog Park Gate 3'&&to == 'Friendship Plaza') {
      me.alertBox(to);
    }
    else if (from == 'Jenra Mall' && to== 'Nepo Mall') {
      me.alertBox(to);
    }
    else if (from== 'Nepo Mall'&&to == 'Jenra Mall') {
      me.alertBox(to);
    }
    else if (from == "Diamond Subdivision"&&to =="Saver\'s Mall") {
      me.alertBox(to);
    }
    else if (from == "Saver\'s Mall"&&to =="Diamond Subdivision") {
      me.alertBox(to);
    }
    else if (from == "Timog Park Gate 1"&&to =="Carmenville") {
      me.alertBox(to);
    }
    else if (from =="Carmenville" && to == "Timog Park Gate 1") {
      me.alertBox(to);
    }
    else {
      console.log(from+"="+to);
      this.nav.push(RoutesMapsPage, { from: from, to: to });
    }

  }

  alertBox(to){
    var transTitle,subtitle;
    var alertTrans = [{
      "You are just near to Marquee Mall. You don\'t need to ride a jeepney.":"マーキーモールが近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to SM City Clark. You don\'t need to ride a jeepney.":"SMシティクラークが近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Main Gate Terminal. You don\'t need to ride a jeepney.":"メインゲートターミナルが近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Angeles University Foundation. You don\'t need to ride a jeepney.":"アンヘレス大学財団が近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Angeles University Foundation Medical Center. You don\'t need to ride a jeepney.":"アンヘレス大学財団医療センターが近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Holy Rosary Parish Church. You don\'t need to ride a jeepney.":"ホーリーロザリオ教区教会が近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Holy Angel University. You don\'t need to ride a jeepney.":"ホーリーエンジェル大学が近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Systems Plus College Foundation. You don\'t need to ride a jeepney.":"システムプラスカレッジ財団が近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Immaculate Concepcion Parish. You don\'t need to ride a jeepney.":"無原罪のお宿りの教区が近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Timog Park Gate 3. You don\'t need to ride a jeepney.":"Timogパークゲート 3が近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Friendship Plaza. You don\'t need to ride a jeepney.":"フレンドシッププラザが近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Nepo Mall. You don\'t need to ride a jeepney.":"ネポモールが近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Jenra Mall. You don\'t need to ride a jeepney.":"ジェンラモールが近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Angeles City Hall. You don\'t need to ride a jeepney.":"アンヘレス市ホールが近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Saver\'s Mall. You don\'t need to ride a jeepney.":"セーバーのモールが近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Diamond Subdivision. You don\'t need to ride a jeepney.":"ダイヤモンド区が近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Carmenville. You don\'t need to ride a jeepney.":"カルメンヴィルが近くにあります。ジープニーに乗る必要はありません。",
      "You are just near to Timog Park Gate 1. You don\'t need to ride a jeepney.":"Timogパークゲート1が近くにあります。ジープニーに乗る必要はありません。"
    }];

    if (navigator.language.split('-')[0]=='ja') {
      transTitle = "アラート";
      subtitle = alertTrans[0]['You are just near to '+to+'. You don\'t need to ride a jeepney.'];
    }
    else {
      transTitle = "Alert";
      subtitle = 'You are just near to '+to+'. You don\'t need to ride a jeepney.';
    }

    var me = this;
    let alert = me.alert.create({
      title: transTitle,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }


}
