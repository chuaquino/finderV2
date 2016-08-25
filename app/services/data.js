import {Storage, SqlStorage} from 'ionic-angular';
import {Injectable} from '@angular/core';

@Injectable()
export class DataService {
    constructor(){

        this.initDB();
        this.insertJeepsData();
        this.insertPointsData();
        this.insertPoliceData();
        this.insertHospitalData();


    }

    initDB(){
      this.storage = new Storage(SqlStorage, {name:'ACMaps'});
      // this.storage.query('CREATE TABLE IF NOT EXISTS jeeps (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, color TEXT, image TEXT, route TEXT, route2 TEXT, category TEXT, coordi TEXT)').then((data) => {
        // console.log('yey');
          // console.log("TABLE CREATED -> " + JSON.stringify(data.res));
      // }, (error) => {
          // console.log(error);
      // });
      this.storage.query("DROP TABLE jeeps");
      this.storage.query('CREATE TABLE IF NOT EXISTS jeeps (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, color TEXT, image TEXT, route TEXT, route2 TEXT, category TEXT, coordi TEXT)').then((data) => {
        console.log('yey');
          console.log("TABLE CREATED -> " + JSON.stringify(data.res));
      }, (error) => {
          console.log(error);
      });

      this.storage.query("DROP TABLE points");

      this.storage.query('CREATE TABLE IF NOT EXISTS points (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, lat TEXT, lng TEXT, tags TEXT, icon TEXT)').then((data) => {
        console.log('yey');
          console.log("TABLE CREATED -> " + JSON.stringify(data.res));
      }, (error) => {
          console.log(error);
      });

      this.storage.query("DROP TABLE police");
      this.storage.query('CREATE TABLE IF NOT EXISTS police (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, address TEXT, email TEXT, landline TEXT, mobile TEXT, lat TEXT, lng TEXT)').then((data) => {
        console.log('police station table created');
          console.log("TABLE CREATED -> " + JSON.stringify(data.res));
      }, (error) => {
          console.log(error);
      });

      this.storage.query("DROP TABLE hospital");
      this.storage.query('CREATE TABLE IF NOT EXISTS hospital (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, address TEXT, email TEXT, landline TEXT, lat TEXT, lng TEXT)').then((data) => {
        console.log('hospital table created');
          console.log("TABLE CREATED -> " + JSON.stringify(data.res));
      }, (error) => {
          console.log(error);
      });
      // this.storage.query('DROP TABLE IF EXISTS jeeps');
      // this.storage.query('DROP TABLE IF EXISTS kv');
      // this.storage.query('DROP TABLE IF EXISTS points');
    }

    insertJeepsData(){
      this.jeeps = [{
        name: 'CHECK-POINT-HOLY',
        color: 'Gray',
        image: 'img/jeeps/sm_c_point_holy.jpg',
        route: 'Check-Point-Holy route is from Maingate to Holy Angel University.',
        route2: '',
        category: 'Angeles',
        coordi: '15.16834,120.58275|15.167787,120.582829|15.167868,120.583204|15.167989,120.583636|15.168036,120.583658|15.168256,120.58399|15.16840,120.58442|15.169333,120.58774|15.168944,120.588046|15.168541,120.588432|15.168701,120.588963|15.16857751,120.58933116|15.16851538,120.58937877|15.16749,120.58981|15.165263,120.590374|15.162861,120.591012|15.16253,120.59107|15.16242,120.59110|15.15900,120.59201|15.15828,120.59222|15.158077,120.592182|15.157543,120.592284|15.157031,120.592278|15.153023,120.591935|15.152765,120.591903|15.15259,120.59180|15.151123,120.591184|15.148034,120.589746|15.14502,120.58873|15.14186,120.58799|15.14131,120.58783|15.13914,120.58746|15.139068,120.587429|15.138817,120.587592|15.137981,120.587043|15.1368,120.586914|15.13642,120.58772|15.137851,120.588826|15.13914,120.58746|15.13987,120.58759|15.14131,120.58783|15.14186,120.58799|15.14347,120.58837|15.14502,120.58873|15.14803,120.58976|15.15120,120.59121|15.150943,120.591812|15.151779,120.592452|15.15283,120.592221|15.15293,120.59217|15.15520,120.59221|15.15703,120.59229|15.15828,120.59222|15.15900,120.59201|15.15940,120.59191|15.16242,120.59110|15.16253,120.59107|15.16286,120.59099|15.16526,120.59038|15.16749,120.58981|15.16787,120.58971|15.169597,120.589351|15.169717,120.588609|15.16931,120.58737|15.16888,120.58595|15.16840,120.58442|15.168256,120.58399|15.168036,120.583658|15.167989,120.583636|15.167868,120.583204|15.167787,120.582829|15.16834,120.58275'
        }, {
        name: 'CHECK-POINT-HENSONVILLE-HOLY',
        color: 'White',
        image: 'img/jeeps/c_point_hensonville_holy.jpg',
        route: 'Check-Point-Hensonville-Holy route is from Narciso St. to Holy Angel University or vice-versa.',
        route2: '',
        category: 'Angeles',
        coordi: '15.166388,120.582832|15.166119,120.58128|15.165664,120.580739|15.165098,120.580841|15.164021,120.581029|15.163109,120.581104|15.162643,120.58052|15.161887,120.580906|15.160728,120.58229|15.15992,120.582182|15.1589,120.581485|15.157491,120.582912|15.155721,120.583309|15.15346,120.58335|15.15269,120.58342|15.15002,120.58421|15.14988,120.58427|15.148523,120.584983|15.146742,120.586388|15.145893,120.587171|15.14502,120.58873|15.142299,120.588062|15.14186,120.58799|15.14131,120.58783|15.139627,120.58745|15.13914,120.58746|15.13884,120.58757|15.138488,120.5873|15.136738,120.586989|15.13642,120.58772|15.137038,120.588148|15.137851,120.588826|15.138136,120.588427|15.13914,120.58746|15.139627,120.58745|15.14131,120.58783|15.14186,120.58799|15.142299,120.588062|15.14347,120.58837|15.14502,120.58873|15.145893,120.587171|15.146742,120.586388|15.148523,120.584983|15.14988,120.58427|15.15002,120.58421|15.15269,120.58342|15.15346,120.58335|15.155721,120.583309|15.157491,120.582912|15.1589,120.581485|15.15992,120.582182|15.161354,120.581946|15.161478,120.582343|15.161872,120.582901|15.162317,120.583953|15.16376,120.583566|15.1653,120.583155|15.166388,120.582832'
        }, {
        name: 'CHECK-POINT-HOLY-HI-WAY',
        color: 'Lavander',
        image: 'img/jeeps/sm_c_point_holy_hi_way.jpg',
        route: 'Check-Point-Holy-Hi-Way route is from Maingate to Holy Angel University.',
        route2: '',
        category: 'Angeles',
        coordi: '15.16834,120.58275|15.167787,120.582829|15.167868,120.583204|15.167989,120.583636|15.168036,120.583658|15.168256,120.58399|15.16840,120.58442|15.169333,120.58774|15.168944,120.588046|15.168541,120.588432|15.168701,120.588963|15.16857751,120.58933116|15.16851538,120.58937877|15.16749,120.58981|15.16747404,120.58973551|15.165263,120.590374|15.162861,120.591012|15.16253,120.59107|15.16242,120.59110|15.159392,120.591881|15.15900,120.59201|15.15828,120.59222|15.158077,120.592182|15.157543,120.592284|15.157031,120.592278|15.153023,120.591935|15.152765,120.591903|15.15259,120.59180|15.151123,120.591184|15.148034,120.589746|15.145045,120.588708|15.14186,120.58799|15.141278,120.587804|15.13914,120.58746|15.137981,120.587043|15.1368,120.586914|15.13642,120.58772|15.13622,120.58805|15.13622,120.58805|15.13567,120.58914|15.13483,120.59063|15.13483,120.59063|15.13417,120.59130|15.13357,120.59185|15.134931,120.592788|15.135883,120.591431|15.137323,120.592541|15.13834,120.59335|15.138711,120.593582|15.13990,120.59450|15.140596,120.594971|15.140808,120.5951|15.142831,120.596791|15.142963,120.596637|15.14327,120.59644|15.14437,120.59588|15.14527,120.59539|15.14544,120.59530|15.14640,120.59478|15.14640,120.59478|15.14751,120.59419|15.147954,120.59393|15.149388,120.593201|15.151775,120.592386|15.15256,120.592324|15.15293,120.59217|15.15577,120.592257|15.15828,120.59222|15.15900,120.59201|15.160023,120.591758|15.16242,120.59110|15.16253,120.59107|15.164378,120.590583|15.165268,120.590358|15.166584,120.589998|15.16749,120.58981|15.169115,120.589424|15.169726,120.588931|15.168872,120.585943|15.16840,120.58442|15.168256,120.58399|15.168036,120.583658|15.167989,120.583636|15.167868,120.583204|15.167787,120.582829|15.16834,120.58275'
        }, {
        name: 'MAINGATE-FRIENDSHIP',
        color: 'Suntan',
        image: 'img/jeeps/m-gate_f-ship.jpg',
        route: 'Maingate-Friendship is from Donjuico Avenue.',
        route2: '',
        category: 'Angeles',
        coordi:'15.166427,120.583066|15.166355,120.582671|15.166190,120.581779|15.166080,120.581102|15.165694,120.578767|15.165358,120.576771|15.165343,120.575565|15.16543,120.574627|15.166105,120.5703|15.166442,120.568257|15.166681,120.566512|15.166757,120.566063|15.166762,120.565567|15.166524,120.563328|15.16631,120.561692|15.166149,120.5609|15.166037,120.560574|15.165573,120.55965|15.164431,120.557392|15.16304,120.55475|15.16304,120.55475|15.163236,120.5551|15.163236,120.5551|15.165573,120.55965|15.166037,120.560574|15.166149,120.5609|15.16631,120.561692|15.166524,120.563328|15.166762,120.565567|15.166757,120.566063|15.166681,120.566512|15.166442,120.568257|15.166105,120.5703|15.16543,120.574627|15.165343,120.575565|15.165358,120.576771|15.165694,120.578767|15.166080,120.581102|15.166190,120.581779|15.166355,120.582671|15.166427,120.583066'
        }, {
        name: 'MARISOL-PAMPANG',
        color: 'Green',
        image: 'img/jeeps/marisol_pampang.jpg',
        route: 'Marisol-Pampang is from the Jake Gonzales Avenue.',
        route2: '',
        category: 'Angeles',
        coordi:'15.15259,120.59180|15.152747,120.591965|15.15269,120.592069|15.151739,120.592383|15.148596,120.593619|15.147576,120.594215|15.146261,120.594918|15.14544,120.59530|15.14527,120.59539|15.143088,120.596546|15.142144,120.596151|15.140787,120.5951|15.13990,120.59450|15.138851,120.593662|15.13834,120.59335|15.137214,120.592418|15.13483,120.59063|15.135562,120.58933|15.13567,120.58914|15.13622,120.58805|15.136287,120.587955|15.13642,120.58772|15.136867,120.587995|15.137851,120.588826|15.1388493,120.58765070000001|15.13892,120.58768|15.139964,120.5884|15.140601,120.588781|15.14124,120.58907|15.14254,120.58971|15.144795,120.59083|15.146908,120.590208|15.148617,120.593598|15.1466,120.594749|15.14544,120.59530|15.14527,120.59539|15.143088,120.596546'
        }, {
        name: 'PAMPANG-HOLY',
        color: 'Red',
        image: 'img/jeeps/pampang_holy.jpg',
        route: 'Pampang-Holy is from Miranda Extension to Angeles City National Highschool.',
        route2: '',
        category: 'Angeles',
        coordi: '15.13914,120.58746|15.139643,120.586007|15.140039,120.585146|15.140549,120.584221|15.141523,120.582515|15.142947,120.583121|15.143495,120.583566|15.144531,120.583599|15.14630,120.58128|15.14682,120.580621|15.149248,120.579028'
        }, {
        name: 'PANDAN-PAMPANG',
        color: 'Blue',
        image: 'img/jeeps/pandan_pampang.jpg',
        route: 'PANDAN-PAMPANG is from Miranda St. to Angeles City Hall.',
        route2: '',
        category: 'Angeles',
        coordi:'15.13784,120.58891|15.138251,120.589309|15.13927,120.59037|15.139734,120.590832|15.140435,120.591892|15.13884,120.593694|15.13990,120.59450|15.141057,120.595272|15.142838,120.596806|15.142905,120.596838|15.144619,120.59804|15.14872,120.601398|15.15103,120.603383|15.15372,120.60482|15.153224,120.605907|15.153255,120.605942|15.152749,120.607052|15.15239,120.60829|15.15181,120.60971|15.15181,120.60971|15.15239,120.60829|15.152749,120.607052|15.153255,120.605942|15.153224,120.605907|15.15372,120.60482|15.156156,120.606076|15.158465,120.607331|15.16036,120.608457|15.160795,120.609262|15.161074,120.60953|15.161881,120.60914|15.162432,120.608675|15.162617,120.608243|15.162946,120.608382|15.163104,120.607698|15.163837,120.60805|15.16451,120.60811|15.16451,120.60811|15.16297,120.607594|15.162346,120.608481|15.161043,120.609294|15.160583,120.608921|15.159034,120.60761|15.156182,120.606124|15.153783,120.604851|15.15366,120.604734|15.152624,120.60423|15.15103,120.603383|15.14872,120.601398|15.147082,120.600081|15.144619,120.59804|15.142913,120.596736|15.14273,120.59658|15.140787,120.595111|15.13990,120.59450|15.13834,120.59335|15.137245,120.592482|15.136417,120.590765|15.137761,120.588912|15.13784,120.58891|15.138251,120.589309|15.13927,120.59037'
        }, {
        name: 'SAPANG BATO-ANGELES',
        color: 'Fire Red',
        image: 'img/jeeps/sapang_bato_angeles.jpg',
        route: 'Sapangbato-Angeles is from Brgy. Louroute2 North West to Sapang Bato.',
        route2: '',
        category: 'Angeles',
        coordi: '15.14186,120.58799|15.14502,120.58873|15.146245,120.586796|15.147074,120.586088|15.14988,120.58427|15.149383,120.582526|15.149362,120.579849|15.14917,120.57793|15.148705,120.576078|15.148009,120.573934|15.147634,120.573143|15.146454,120.570096|15.145748,120.567935|15.14539,120.56643|15.14505,120.56465|15.14455,120.56002|15.14449,120.55945|15.14776,120.559465|15.15069,120.55945|15.15091,120.55946|15.153712,120.560274|15.155379,120.56034|15.157124,120.560007|15.15803,120.55970|15.158149,120.559394|15.159076,120.556916|15.160122,120.556219|15.16304,120.55475|15.162659,120.55373|15.16258,120.55349|15.162597,120.551959|15.160458,120.551053|15.161157,120.549245|15.164119,120.5478191|15.165284,120.546273|15.170974,120.538784|15.170943,120.536011|15.17078,120.53471|15.170094,120.531982|15.170575,120.529928|15.170399,120.527599|15.171697,120.525495|15.17234,120.523787|15.172589,120.521994|15.17253,120.51979|15.172244,120.517154|15.17114,120.51630|15.17028,120.51436|15.16966,120.51317|15.16966,120.51317|15.17028,120.51436|15.17114,120.51630|15.172244,120.517154|15.17253,120.51979|15.172589,120.521994|15.17234,120.523787|15.171697,120.525495|15.170399,120.527599|15.170575,120.529928|15.170094,120.531982|15.17078,120.53471|15.170943,120.536011|15.170974,120.538784|15.165284,120.546273|15.164119,120.5478191|15.161157,120.549245|15.160458,120.551053|15.162597,120.551959|15.16258,120.55349|15.162659,120.55373|15.16304,120.55475|15.160122,120.556219|15.159076,120.556916|15.158149,120.559394|15.15803,120.55970|15.157124,120.560007|15.155379,120.56034|15.153712,120.560274|15.15091,120.55946|15.15069,120.55945|15.14776,120.559465|15.14449,120.55945|15.14455,120.56002|15.14505,120.56465|15.14539,120.56643|15.145748,120.567935|15.146454,120.570096|15.147634,120.573143|15.148009,120.573934|15.148705,120.576078|15.14917,120.57793|15.149362,120.579849|15.149383,120.582526|15.14988,120.58427|15.147074,120.586088|15.146245,120.586796|15.14502,120.58873|15.14186,120.58799'
        }, {
        name: 'SUNSET-NEPO',
        color: 'Orange',
        image: 'img/jeeps/sunset_nepo.jpg',
        route: 'Sunset-Nepo is from Teresa Avenue to Fil-Am Friendship.',
        route2: '',
        category: 'Angeles',
        coordi: '15.135366,120.586431|15.135335,120.585423|15.133755,120.58443|15.133051,120.581946|15.13563,120.579704|15.137095,120.578266|15.137078,120.578264|15.13824,120.577075|15.139845,120.575541|15.141419,120.57287|15.14203,120.569946|15.142475,120.569372|15.139721,120.567366|15.137909,120.56549|15.137252,120.564406|15.138079,120.563514'
        },{
        name: 'VILLA-PAMPANG',
        color: 'Yellow',
        image: 'img/jeeps/villa_pampang.jpg',
        route: 'Villa-Pampang is from Essel Park to Holy Angel University.',
        route2: '',
        category: 'Angeles',
        coordi:
        '15.121995,120.600207|15.123002,120.599442|15.124017,120.598821|15.12493,120.59831|15.125762,120.598015|15.126088,120.597546|15.129851,120.595207|15.131456,120.593812|15.133331,120.591989|15.13357,120.59185|15.135089,120.592624|15.13594,120.591356|15.137623,120.589119|15.13784,120.58891|15.138799,120.587541|15.136961,120.586506|15.13642,120.58772|15.13622,120.58805|15.13567,120.58914|15.134822,120.590594|15.13483,120.59063|15.13417,120.59130|15.133092,120.592257|15.131528,120.593748|15.129685,120.595293|15.1281,120.596259|15.126267,120.597407|15.124931,120.598174|15.12493,120.59831|15.123859,120.59878|15.122834,120.599536|15.121995,120.600207'
        }, {
        name: 'ROUTE 1',
        color: 'Route 1',
        image: 'img/jeeps/route_1.jpg',
        route: 'Route 1 is from Maingate to University of the Philippines.',
        route2:  'SPOW BARRACKS, BLUE BIANGCO, LOMI HOUSE, UP L&T G4 GOLDEN STONE 7-11 C/AC, PASSENGERS TERMINAL, FEDEZ OWWA PHIL HEALTH, FLYING V CANDABA FOOD COURT GUT BACK TGA, JOIL S-NEXT SECOMP, FOUR SEASON METRO BANK.TI, CREAMLINE TWOLANE ARJAN DFS PARKSON DFS BDO, LIBERTY DFS DONG WANG BROOKS DEE CO WESTERN USA, LILY PLAZA LBP BPI STOTSENBERG MED CENTER UCPB, PUREGOLD BDO CHOWKING, IT HUB LESBON VALUE CITY, MC DONALDS CHAPERL 2 MPC MCO,',
        category: 'Clark',
        coordi: '15.167747,120.584148|15.168003,120.584135|15.168076,120.584057|15.167878,120.583202|15.167114,120.583113|15.165921,120.57626|15.166376,120.573143|15.167433,120.565767|15.167081,120.562742|15.166811,120.560596|15.165217,120.55712|15.163643,120.553772|15.163518,120.551691|15.164823,120.54785|15.169379,120.541949|15.175366,120.534175'
        }, {
        name: 'ROUTE 2',
        color: 'Route 2',
        image: 'img/jeeps/route_2.jpg',
        route: 'Route 2 is from Maingate to Clark Polytechnic.',
        route2: 'PHILEXCEL, VILLAMOR, JOLLIBEE CLARK, BERTHAPHIL 3, DFA IMIGRATION ATENEO DE MANILA, PAB RCBC MAYBANK DBFC, FUJI, KYOWA, COA, TECHNOWOOD, SAT A, CLARK ELECTRIC, SUTHERLAND, IQOOR 1, POONGSAN, SAPANGBATO GATE, AMERTRON, ASIANA GREENVILL RESORT, COASTAL, LOHAS HOTEL, RITZVILL, REDWOOD, POLYTECNIC, CDC OFFICE & CAFETERIA & DAYCARE CENTER, MEMOSA CASINO, MABALACAT TERMINAL (ANNEX), ASIANA AIRLINE, HOLIDAY INN, MUSEUM, CYBER PSD FIRE STATION CLARK, HOSTEL PLDT OXFORD HOTEL',
        category: 'Clark',
        coordi: '15.167747,120.584148|15.168003,120.584135|15.168076,120.584057|15.167878,120.583202|15.167114,120.583113|15.165921,120.57626|15.166376,120.573143|15.167433,120.565767|15.167081,120.562742|15.166811,120.560596|15.165217,120.55712|15.163643,120.553772|15.163518,120.551691|15.164823,120.54785|15.169379,120.541949|15.175366,120.534175'
        }, {
        name: 'ROUTE 3',
        color: 'Route 3',
        image: 'img/jeeps/route_3.jpg',
        route: 'Route 3 is from the Maingate to Panday Pira Avenue.',
        route2: 'SPOW BARRACKS, BLUE BIANGCO, UP, LNT, APEX CONQUENT, PENINSULA, MUSTANG, SOUTHERLAND DORM, STUD-STOTSENBERG, GOLDEN STONE/MAGIC LINE, IDEAL, GLOBAL, FOUR SEASON, CLASSIC, T.I, KEYGOLD, MULTECH, HANZA, VIVA VIDA, ASIA LUXE, LEATHER, JIOL, CLARK PLASTIC, 7/11, SAMSUNG LPSPC, MACOS VILLAGE, EAST ASIA, ALL KEY',
        category: 'Clark',
        coordi: '15.167747,120.584148|15.168003,120.584135|15.168076,120.584057|15.167878,120.583202|15.167114,120.583113|15.165921,120.57626|15.166376,120.573143|15.167433,120.565767|15.167081,120.562742|15.166811,120.560596|15.165217,120.55712|15.163643,120.553772|15.163518,120.551691|15.164823,120.54785|15.169379,120.541949|15.175366,120.534175'
        }, {
        name: 'ROUTE 5&7',
        color: 'Route 5&7',
        image: 'img/jeeps/route_5_7.jpg',
        route: 'Route 5&7 is from Maingate to Nanox.',
        route2: 'NANOX, SMK, L&K, PHIL SINEI, YOKOHAMA, ADERANS, CLARK LOOP',
        category: 'Clark',
        coordi: '15.167747,120.584148|15.168003,120.584135|15.168076,120.584057|15.167878,120.583202|15.167114,120.583113|15.165921,120.57626|15.166376,120.573143|15.167433,120.565767|15.167081,120.562742|15.166811,120.560596|15.165217,120.55712|15.163643,120.553772|15.163518,120.551691|15.164823,120.54785|15.169379,120.541949|15.175366,120.534175'
      }];




      console.log(this.jeeps);
      console.log(this.jeeps.length);
      var i,j,item;

      for(i=0, j=this.jeeps.length; i < j; i++){
        item=this.jeeps[i];

        this.storage.query("INSERT OR REPLACE INTO jeeps (id, name, color, image, route, route2, category, coordi) VALUES ('"+i+"','"+item.name+"','"+item.color+"','"+item.image+"','"+item.route+"','"+item.route2+"','"+item.category+"','"+ item.coordi+"')").then((data) => {
            console.log(JSON.stringify(data.res));
        }, (error) => {
          console.log(error);
            console.log("ERROR -> " + JSON.stringify(error.err));
        });

      }


    }

    insertPointsData(){

      this.points = [{
        text: 'Republic Central Colleges',
        lat: '15.13927',
        lng: '120.59037',
        tags: 'PANDAN-PAMPANG',
        icon: 'img/pins/school.png'
        },{
        text: 'Holy Family Medical Center',
        lat:'15.13990',
        lng:'120.59450',
        tags: 'CHECK-POINT-HOLY-HI-WAY,PANDAN-PAMPANG',
        icon: 'img/pins/hospital.png'
        },{
        text: 'Citi Center',
        lat: '15.15181',
        lng: '120.60971',
        tags: 'PANDAN-PAMPANG',
        icon: 'img/pins/subd_brgy.png'
        },{
        text: 'Marquee Mall',
        lat: '15.162432',
        lng: '120.608675',
        tags: 'PANDAN-PAMPANG',
        icon: 'img/pins/mall.png'
        },{
        text: 'Angeles City Hall',
        lat: '15.16451',
        lng: '120.60811',
        tags: 'PANDAN-PAMPANG',
        icon: 'img/pins/cityhall.png'
        },{
        text: 'SM City Clark',
        lat:'15.16834',
        lng:'120.58275',
        tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY',
        icon: 'img/pins/mall.png'
        },{
        text: 'Main Gate Terminal',
        lat:'15.16840',
        lng:'120.58442',
        tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY',
        icon: 'img/pins/terminal.png'
        },{
        text: 'Diamond Subdivision',
        lat: '15.16253',
        lng: '120.59107',
        tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY',
        icon: 'img/pins/subd_brgy.png'
        },{
        text: "Saver\'s Mall",
        lat: '15.16242',
        lng: '120.59110',
        tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY',
        icon: 'img/pins/mall.png'
        },{
        text: 'Immaculate Concepcion Parish',
        lat: '15.15900',
        lng: '120.59201',
        tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY',
        icon: 'img/pins/church.png'
        },{
        text: 'Systems Plus College Foundation',
        lat: '15.15828',
        lng: '120.59222',
        tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY',
        icon: 'img/pins/school.png'
        },{
        text: 'Marisol',
        lat:'15.15293',
        lng:'120.59217',
        tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY',
        icon: 'img/pins/subd_brgy.png'
        },{
        text: 'Lourdes North West',
        lat:'15.14186',
        lng:'120.58799',
        tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY',
        icon: 'img/pins/terminal.png'
        },{
        text: 'Bancal',
        lat: '15.15346',
        lng: '120.58335',
        tags: 'CHECK-POINT-HENSONVILLE-HOLY',
        icon: 'img/pins/subd_brgy.png'
        },{
        text: 'Jenra Mall',
        lat: '15.13622',
        lng: '120.58805',
        tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY,CHECK-POINT-HENSONVILLE-HOLY,MARISOL-PAMPANG,VILLA-PAMPANG',
        icon: 'img/pins/mall.png'
        },{
        text: 'Nepo Mall',
        lat :'15.13567',
        lng :'img/pins/mall.png',
        tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY,CHECK-POINT-HENSONVILLE-HOLY,MARISOL-PAMPANG,VILLA-PAMPANG',
        icon: 'img/pins/mall.png'
        },{
        text: 'Sacred Heart Medical Center',
        lat :'15.12493',
        lng :'120.59831',
        tags: 'VILLA-PAMPANG',
        icon: 'img/pins/hospital.png'
        },{
        text: 'Holy Angel University',
        lat: '15.13417',
        lng: '120.59130',
        tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY,CHECK-POINT-HENSONVILLE-HOLY',
        icon: 'img/pins/school.png'
        },{
        text: 'Holy Rosary Parish Church',
        lat: '15.13483',
        lng: '120.59063',
        tags: 'CHECK-POINT-HOLY-HI-WAY,CHECK-POINT-HOLY,CHECK-POINT-HENSONVILLE-HOLY',
        icon: 'img/pins/church.png'
        },{
        text: 'The Medical City Angeles',
        lat:'15.13834',
        lng:'120.59335',
        tags: 'CHECK-POINT-HOLY-HI-WAY,PANDAN-PAMPANG',
        icon: 'img/pins/hospital.png'
        },{
        text: 'Angeles University Foundation Medical Center',
        lat: '15.14527',
        lng: '120.59539',
        tags: 'CHECK-POINT-HOLY-HI-WAY,MARISOL-PAMPANG',
        icon: 'img/pins/hospital.png'
        },{
        text: 'Angeles University Foundation',
        lat: '15.14544',
        lng: '120.59530',
        tags: 'CHECK-POINT-HOLY-HI-WAY,MARISOL-PAMPANG',
        icon: 'img/pins/school.png'
        },{
        text: 'City College of Angeles',
        lat: '15.14917',
        lng: '120.57793',
        tags: 'SAPANG BATO-ANGELES',
        icon: 'img/pins/school.png'
        },{
        text: 'Carmenville',
        lat:'15.14539',
        lng: '120.56643',
        tags:'SAPANG BATO-ANGELES',
        icon: 'img/pins/subd_brgy.png'
        },{
        text: 'Timog Park Gate 1',
        lat:'15.14505',
        lng:'120.56465',
        tags:'SAPANG BATO-ANGELES',
        icon: 'img/pins/subd_brgy.png'
        },{
        text: 'Cuayan',
        lat:'15.14449',
        lng:'120.55945',
        tags:'SAPANG BATO-ANGELES',
        icon: 'img/pins/subd_brgy.png'
        },{
        text: 'Timog Park Gate 2',
        lat:'15.14776',
        lng: '120.559465',
        tags:'SAPANG BATO-ANGELES',
        icon: 'img/pins/subd_brgy.png'
        },{
        text: 'Timog Park Gate 3',
        lat:'15.15069',
        lng:'120.55945',
        tags:'SAPANG BATO-ANGELES',
        icon: 'img/pins/subd_brgy.png'
        },{
        text: 'Friendship Plaza',
        lat:'15.15091',
        lng:'120.55946',
        tags:'SAPANG BATO-ANGELES',
        icon: 'img/pins/subd_brgy.png'
        },{
        text: 'Anunas',
        lat:'15.153712',
        lng:'120.560274',
        tags:'SAPANG BATO-ANGELES',
        icon: 'img/pins/subd_brgy.png'
        },{
        text: 'Villa Sol',
        lat:'15.15803',
        lng: '120.55970',
        tags:'SAPANG BATO-ANGELES',
        icon: 'img/pins/subd_brgy.png'
        },{
        text: 'Friendship',
        lat:'15.16304',
        lng:'120.55475',
        tags:'SAPANG BATO-ANGELES',
        icon: 'img/pins/terminal.png'
        },{
        text: 'Transfer',
        lat:'15.16258',
        lng:'120.55349',
        tags:'SAPANG BATO-ANGELES',
        icon: 'img/pins/terminal.png'
        },{
        text: 'Margot',
        lat:'15.17078',
        lng:'120.53471',
        tags:'SAPANG BATO-ANGELES',
        icon: 'img/pins/subd_brgy.png'
        },{
        text: 'Sapang Bato',
        lat:'15.16966',
        lng:'120.51317',
        tags:'SAPANG BATO-ANGELES',
        icon: 'img/pins/subd_brgy.png'
        },{
        text: 'Rafael Lazatin Memorial Medical Center',
        lat:'15.14630',
        lng:'120.58128',
        tags: 'PAMPANG-HOLY',
        icon: 'img/pins/hospital.png'
        },{
        text: 'Dr. Amando L. Garcia Medical Center, Inc.',
        lat:'15.14254',
        lng:'120.58971',
        tags: 'MARISOL-PAMPANG',
        icon: 'img/pins/hospital.png'
        },{
        text: 'Angeles Medical Center Inc.',
        lat:'15.14124',
        lng:'120.58907',
        tags: 'MARISOL-PAMPANG',
        icon: 'img/pins/hospital.png'
      }];

      var x,y,item2;

      // this.storage.query("delete from points");

      for(x=0, y=this.points.length; x < y; x++){
        item2=this.points[x];
        console.log(item2.text);
        // console.log(this.points[x]);

        // this.storage.query("INSERT OR REPLACE INTO points (id, text, lat, lng, tags,icon) VALUES ('"+x+"','"+item2.text+"','"+item2.lat+"','"+item2.lng+"','"+item2.tags+"','"+item2.icon+"')").then((data) => {
        //     console.log(JSON.stringify(data.res));
        // }, (error) => {
        //   console.log(error);
        //     console.log("ERROR -> " + JSON.stringify(error.err));
        // });

          this.storage.query('INSERT OR REPLACE INTO points (id, text, lat, lng, tags,icon) VALUES ("'+x+'","'+item2.text+'","'+item2.lat+'","'+item2.lng+'","'+item2.tags+'","'+item2.icon+'")').then((data) => {
              // console.log(data);
          }, (error) => {
            console.log(error);
              console.log("ERROR -> " + JSON.stringify(error.err));
          });

      }
    }

      insertPoliceData(){
        this.police = [{
          name: 'Police Station No. 1',
          address: 'Sto. Rosario St., Angeles City',
          email: 'acpo_station1@yahoo.com',
          landline: '(63 45) 322-7742',
          mobile: '0932-252-5056',
          lat: '15.13454299',
          lng: '120.59104002'
        },{
          name: 'Police Station No. 2',
          address: 'San Francisco Street, Barangay Sta. Teresita Angeles City',
          email: 'acpo_cs2@yahoo.com',
          landline: '(63 45)322-3872',
          mobile: '0932-303-7127',
          lat: '15.152118',
          lng: '120.585225'
        },{
          name: 'Police Station No. 3',
          address: 'Magalang Road, Barangay Pulung Maragul, Angeles City',
          email: 'ps3_opn@yahoo.com',
          landline: '(63 45)322-2146',
          mobile: '0932-252-5037 / 9017-474-6996',
          lat: '15.160938',
          lng: '120.608948'
        },{
          name: 'Police Station No. 4',
          address: 'Constine Street, corner MA Roxas Avenue, Balibago, Angeles City',
          email: 'acpo_ps4@yahoo.com',
          landline: '(63 45)322-2146',
          mobile: '0932-252-8670',
          lat: '15.169390',
          lng: '120.585166'
        },{
          name: 'Police Station No. 5',
          address: 'Barangay Cuayan, Angeles City',
          email: 'acpo_ps5@yahoo.com',
          landline: '(63 45)322-9188',
          mobile: '0932-610-2042',
          lat: '15.144749',
          lng: '120.559218'
        },{
          name: 'Police Station No. 6',
          address: 'Barangay Lourdes Sur East, McArthur Highway, Angeles City',
          email: 'acpo_ps6@yahoo.com',
          landline: '(63 45)322-8256',
          mobile: '0933-610-2043 / 0933-510-6691',
          lat: '15.146031',
          lng: '120.594740'
        }];
        var a,b,item3;

        for(a=0, b=this.police.length; a < b; a++){
          item3=this.police[a];

          this.storage.query("INSERT OR REPLACE INTO police (id, name, address, email, landline, mobile, lat, lng) VALUES ('"+a+"','"+item3.name+"','"+item3.address+"','"+item3.email+"','"+item3.landline+"','"+item3.mobile+"','"+item3.lat+"','"+item3.lng+"')").then((data) => {
              console.log(JSON.stringify(data.res));
          }, (error) => {
            console.log(error);
              console.log("ERROR -> " + JSON.stringify(error.err));
          });
        }
    }
    insertHospitalData(){
      this.hospital = [{
        name: 'Angeles Medical Center',
        address: 'Rizal Street, Angeles City',
        email: 'angeles_medical_center@yahoo.com',
        landline: '(63 45)877-7150 / 322-4632 / 887-3139',
        lat: '15.141437',
        lng: '120.589142'
      },{
        name: 'Angeles University Medical Center',
        address: 'McArthur Highway, Angeles City',
        email: 'alvin@auf.edu.ph',
        landline: '(63 45)322-8876 / 8880 / 888-22668',
        lat: '15.145463',
        lng: '120.594934'
      },{
        name: 'Holy Family Medical Center',
        address: '179 Santo Entierro Street, Angeles City',
        email: 'Email address not available.',
        landline: '(63 45)888-6620 / 322-3623',
        lat: '15.140357',
        lng: '120.594385'
      },{
        name: 'Rafael Lazatin Memorial Medical Center',
        address: 'Visitacion St., cor Pampang Road, Angeles City',
        email: 'Email address not available.',
        landline: '(63 45)322-4495 / 1222 / 887-4133',
        lat: '15.146144',
        lng: '120.580873'
      },{
        name: 'Mother of Perpetual Help Hospital',
        address: '2257 Santo Entierro Street, Angeles City',
        email: 'Email address not available.',
        landline: '(63 45)888-1655',
        lat: '15.141261',
        lng: '120.595708'
      },{
        name: 'Dr. Amando L. Garcia Medical Center, Inc.',
        address: '648 Rizal Street, Angeles City',
        email: 'Email address not available.',
        landline: '(045)322-0165',
        lat: '15.142835',
        lng: '120.589643'
      },{
        name: 'St. Catherine Of Alexandria',
        address: 'Rizal Street, Angeles City',
        email: 'Email address not available.',
        landline: '(045)888-7209',
        lat: '15.135523',
        lng: '120.585090'
      }];
      var c,d,item4;

      for(c=0, d=this.hospital.length; c < d; c++){
        item4=this.hospital[c];

        this.storage.query("INSERT OR REPLACE INTO hospital (id, name, address, email, landline, lat, lng) VALUES ('"+c+"','"+item4.name+"','"+item4.address+"','"+item4.email+"','"+item4.landline+"','"+item4.lat+"','"+item4.lng+"')").then((data) => {
            console.log(JSON.stringify(data.res));
        }, (error) => {
          console.log(error);
            console.log("ERROR -> " + JSON.stringify(error.err));
        });
      }
  }

    getAllData(ctr) {
      return this.storage.query("SELECT * FROM jeeps WHERE category = '"+ctr+"'");
    }

    getJeepDetails(ctr) {
      return this.storage.query('SELECT * FROM jeeps WHERE name = "'+ctr+'"');
    }

    getPoints(){
      return this.storage.query("SELECT * FROM points ORDER BY text ASC");
    }

    getPointsOrigin(ctr){
      return this.storage.query('SELECT * FROM points WHERE text = "'+ctr+'"');
    }

    getPoliceDetails(ctr){
      return this.storage.query("SELECT * FROM police");
    }
    getHospitalDetails(ctr){
      return this.storage.query("SELECT * FROM hospital");
    }
}
