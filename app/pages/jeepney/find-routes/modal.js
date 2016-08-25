import {Component} from '@angular/core';
import {Modal, NavController, ViewController,NavParams, Storage, SqlStorage} from 'ionic-angular';
import {DataService} from '../../../services/data';
import {TranslatePipe} from '../../../pipes/translate';

@Component({
  templateUrl: 'build/pages/jeepney/find-routes/modal.html',
  pipes: [TranslatePipe]
})

export class MyModal {
  static get parameters(){
    return [[ViewController],[DataService],[NavParams]];
  }
  constructor(view,dataService,navParams) {

    this.navParams = navParams;

    this.ctr = navParams.get('ctrId');
    this.dataService = dataService;

    this.points = [];

    this.jp = [{
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
      "Villa Sol": "Villa Sol"


    }];



    console.log(this.dataService.getPoints());
    this.dataService.getPoints().then((data) => {
      console.log(data.result);
      if(data.res.rows.length > 0) {
        for(var i = 0; i < data.res.rows.length; i++) {
          if (navigator.language.split('-')[0]=='ja') {
            // console.log(this.jp[0][data.res.rows.item(i).text]);
            this.points.push(this.jp[0][data.res.rows.item(i).text]);
          }
          else {
            this.points.push(data.res.rows.item(i).text);
          }
        }
      }
    }, (error) => {
      console.log(error);
    })

    this.view = view;

    this.searchQuery = '';
    this.initializeItems();
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
     let val = searchbar.target.value;

    // if the value is an empty string don't filter the items
    // if (q.trim() == '') {
    //   return;
    // }
    //
    // this.items = this.items.filter((v) => {
    //   console.log(v);
    //   if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
    //     return true;
    //   }
    //   return false;
    // })

    // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
  }

  initializeItems() {
    this.items = this.points;
  }

  close() {
    this.view.dismiss();
  }

  validateItem(ctr){
    let data = { 'point': ctr };
    this.view.dismiss(data);
  }
}
