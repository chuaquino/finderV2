import {Pipe} from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe {
  transform(value, args) {

    let newValue = "";

    var jp = [{
      "Enter a location" : "場所を入力します。",
      "Restaurants": "レストラン",
      "Jeeps & Routes" : "ジープ＆ルート",
      "Hotels":"ホテル",
      "Malls":"モール",
      "Beauty Salons":"美容院",
      "Supermarkets":"スーパーマーケット",
      "Police Stations":"警察署",
      "Hospitals":"病院",

      "Angeles":"アンヘレス",
      "Clark":"クラーク",

      "Hotel":"ホテル",
      "Hospital":"病院",
      "Supermarket":"スーパーマーケット",
      "Department Store":"デパート",
      "Clothing Store":"洋服店",
      "Shoe Store":"靴屋",
      "Police Station":"警察署",
      "Restaurant":"レストラン",
      "Cafe":"カフェ",
      "Hotel":"ホテル",
      "Shopping Mall":"ショッピングモール",
      "Beauty Salon":"ビューティーサロン",


      "CHECK-POINT-HOLY": "チェック-ポイント- ホーリー",
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

      "Blue": "青",
      "White":"白",
      "Gray":"灰",
      "Green":"緑",
      "Lavander": "ラベンダー",
      "Suntan": "サンタン",
      "Red": "赤",
      "Fire Red": "ファイアレッド",
      "Beige": "ベージュ",
      "Yellow": "黄",
      "Orange":"オレンジ",

      "Route 1":"ルート 1",
      "Route 2":"ルート 2",
      "Route 3":"ルート 3",
      "Route 5&7":"ルート 5&7",
      "ROUTE 1":"ルート 1",
      "ROUTE 2":"ルート 2",
      "ROUTE 3":"ルート 3",
      "ROUTE 5&7":"ルート 5&7",

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

      "Choose starting point":"出発地を選択",
      "Choose destination":"目的地を選択",
      "From:":"出発地：",
      "To:":"目的地：",
      "Search":"検索",
      "Find Routes":"経路を検索",
      "Jeepneys":"ジープニー",
      "Jeepney Routes":"ジープニー経路",

      "Place Type":"場所の種類",
      "Cuisine":"料理",
      "Sort":"並べ替え",

      "Any Cuisine":"任意の料理",
      "American":"アメリカの料理",
      "Chinese":"中国料理",
      "Filipino":"フィリピン料理",
      "Indian":"インディアン料理",
      "Italian":"イタリアの料理",
      "Japanese":"日本料理",
      "Lebanese":"レバノン料理",
      "Mexican":"メキシコ料理",
      "Spanish":"スペイン料理",
      "Thai":"タイの料理",
      "Vietnamese":"ベトナム料理",

      "Distance":"距離",
      "Alphabetically":"アルファベット順",
      "Rating":"評定",
      "Cancel":"キャンセル",

      "Map":"地図",
      "Website":"ウェブサイト",
      "Reviews":"レビュー",

      "Route Description:":"ルート概要:",

      "Check-Point-Holy route is from Maingate to Holy Angel University.":"チェック-ポイント-ホーリールートは、メインゲートからホーリーエンジェル大学までです。",
      "Check-Point-Hensonville-Holy route is from Narciso St. to Holy Angel University or vice-versa.":"チェック-ポイント-ヘンソンヴィル-ホーリールートは、ナルシソ・ストリートからその逆ホーリーエンジェル大学またはにあります。",
      "Check-Point-Holy-Hi-Way route is from Maingate to Holy Angel University.":"チェック-ポイント- ホーリーハイー-ウェイルートは、メインゲートからホーリーエンジェル大学までです。",
      "Maingate-Friendship is from Donjuico Avenue.":"メインゲート-フレンドシップはドンJuicoアベニューからです。",
      "Marisol-Pampang is from the Jake Gonzales Avenue.":"マリソル-パンパングはジェイクゴンザレスアベニューからです。",
      "Pampang-Holy is from Miranda Extension to Angeles City National Highschool.":"パンパング-ホーリーはミランダ拡張からアンヘレス全国高校までです。",
      "PANDAN-PAMPANG is from Miranda St. to Angeles City Hall.":"パンダン-パンパングはミランダ通りからアンヘレス市ホールまでです。",
      "Sapangbato-Angeles is from Brgy. Lourdes North West to Sapang Bato.":"サパングバトバト-アンヘレスはBrgy. ルルドノースウェストからサパングバトまでです。",
      "Sunset-Nepo is from Teresa Avenue to Fil-Am Friendship.":"スンセト-ネポはテレサ・アベニューからのFil-アムの友情にあります。",
      "Villa-Pampang is from Essel Park to Holy Angel University.":"ビラ-パンパングはエッセルパークからホーリーエンジェル大学までです。",
      "Plaridel-Capaya is from Plaridel Street to Capaya.":"Plaridel-カパヤ川はカパヤ川にPlaridelストリートからです。"





    }];

    if (navigator.language.split('-')[0]=='ja') {
      console.log(jp);
      newValue = jp[0][value];
      console.log(newValue);

      return newValue;
    }
    else {
      return value;
    }


  }
}
