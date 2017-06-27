import { Component, OnInit, Inject, TemplateRef } from '@angular/core';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireModule, FirebaseApp } from 'angularfire2';
// import { IStock } from '../../models/stock';

@IonicPage()
@Component({
  selector: 'page-portfolio',
  templateUrl: 'portfolio.html',
})
export class PortfolioPage {
  // iStock: IStock;
  // stocks: FirebaseListObservable<any[]>;
  // sdkDb:any;
  // allLessons: IStock[];
  // filtered: IStock[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PortfolioPage');
  }


  // addStock()
  // {
  //   this.stocks.push(
  //     [
  //       {
  //         "StockId": 1,
  //         "STOCKNAME": "INFY",
  //         "NETPOSITION": 70,
  //         "AVGRATE": 1029.6
  //       },
  //       {
  //         "StockId": 2,
  //         "STOCKNAME": "LT",
  //         "NETPOSITION": 45,
  //         "AVGRATE": 1367.42
  //       },
  //       {
  //         "StockId": 3,
  //         "STOCKNAME": "MINDTREE",
  //         "NETPOSITION": 45,
  //         "AVGRATE": 473.42
  //       },
  //       {
  //         "StockId": 4,
  //         "STOCKNAME": "ASIANPAINT",
  //         "NETPOSITION": 5,
  //         "AVGRATE": 908.82
  //       },
  //       {
  //         "StockId": 5,
  //         "STOCKNAME": "BANKBARODA",
  //         "NETPOSITION": 40,
  //         "AVGRATE": 167.44
  //       },
  //       {
  //         "StockId": 6,
  //         "STOCKNAME": "SHARONBIO",
  //         "NETPOSITION": 550,
  //         "AVGRATE": 9.4
  //       },
  //       {
  //         "StockId": 7,
  //         "STOCKNAME": "SUNPHARMA",
  //         "NETPOSITION": 130,
  //         "AVGRATE": 679.37
  //       },
  //       {
  //         "StockId": 8,
  //         "STOCKNAME": "SBIN",
  //         "NETPOSITION": 125,
  //         "AVGRATE": 241
  //       },
  //       {
  //         "StockId": 9,
  //         "STOCKNAME": "DRREDDY",
  //         "NETPOSITION": 10,
  //         "AVGRATE": 2812.65
  //       },
  //       {
  //         "StockId": 10,
  //         "STOCKNAME": "ICICIBANK",
  //         "NETPOSITION": 125,
  //         "AVGRATE": 265.71
  //       },
  //       {
  //         "StockId": 11,
  //         "STOCKNAME": "TATAMOTORS",
  //         "NETPOSITION": 20,
  //         "AVGRATE": 452.05
  //       },
  //       {
  //         "StockId": 12,
  //         "STOCKNAME": "PNB",
  //         "NETPOSITION": 50,
  //         "AVGRATE": 126.86
  //       },
  //       {
  //         "StockId": 13,
  //         "STOCKNAME": "JISLJALEQS",
  //         "NETPOSITION": 5,
  //         "AVGRATE": 92.55
  //       },
  //       {
  //         "StockId": 14,
  //         "STOCKNAME": "DHFL",
  //         "NETPOSITION": 25,
  //         "AVGRATE": 226
  //       },
  //       {
  //         "StockId": 15,
  //         "STOCKNAME": "ASHOKLEY",
  //         "NETPOSITION": 150,
  //         "AVGRATE": 88.33
  //       },
  //       {
  //         "StockId": 16,
  //         "STOCKNAME": "EDUCOMP",
  //         "NETPOSITION": 150,
  //         "AVGRATE": 14.52
  //       },
  //       {
  //         "StockId": 17,
  //         "STOCKNAME": "IOC",
  //         "NETPOSITION": 60,
  //         "AVGRATE": 102.24
  //       },
  //       {
  //         "StockId": 18,
  //         "STOCKNAME": "SPICEJET",
  //         "NETPOSITION": 50,
  //         "AVGRATE": 63.89
  //       },
  //       {
  //         "StockId": 19,
  //         "STOCKNAME": "GITANJALI",
  //         "NETPOSITION": 80,
  //         "AVGRATE": 57.09
  //       },
  //       {
  //         "StockId": 21,
  //         "STOCKNAME": "TCS",
  //         "NETPOSITION": 29,
  //         "AVGRATE": 2345.69
  //       },
  //       {
  //         "StockId": 22,
  //         "STOCKNAME": "ENGINERSIN",
  //         "NETPOSITION": 50,
  //         "AVGRATE": 141.16
  //       },
  //       {
  //         "StockId": 23,
  //         "STOCKNAME": "MANAPPURAM",
  //         "NETPOSITION": 100,
  //         "AVGRATE": 88.97
  //       },
  //       {
  //         "StockId": 24,
  //         "STOCKNAME": "COALINDIA",
  //         "NETPOSITION": 65,
  //         "AVGRATE": 323.36
  //       },
  //       {
  //         "StockId": 25,
  //         "STOCKNAME": "PUNJLLOYD",
  //         "NETPOSITION": 200,
  //         "AVGRATE": 19.92
  //       },
  //       {
  //         "StockId": 26,
  //         "STOCKNAME": "ICICIPRULI",
  //         "NETPOSITION": 100,
  //         "AVGRATE": 325.04
  //       },
  //       {
  //         "StockId": 27,
  //         "STOCKNAME": "JINDALSTEL",
  //         "NETPOSITION": 50,
  //         "AVGRATE": 69.44
  //       },
  //       {
  //         "StockId": 28,
  //         "STOCKNAME": "JUBLFOOD",
  //         "NETPOSITION": 15,
  //         "AVGRATE": 994.9
  //       },
  //       {
  //         "StockId": 29,
  //         "STOCKNAME": "JETAIRWAYS",
  //         "NETPOSITION": 50,
  //         "AVGRATE": 437.37
  //       },
  //       {
  //         "StockId": 30,
  //         "STOCKNAME": "NHPC",
  //         "NETPOSITION": 50,
  //         "AVGRATE": 21.72
  //       },
  //       {
  //         "StockId": 31,
  //         "STOCKNAME": "IVRCLINFRA",
  //         "NETPOSITION": 1000,
  //         "AVGRATE": 7.01
  //       }
  //     ]
  //   );
  // }
}
