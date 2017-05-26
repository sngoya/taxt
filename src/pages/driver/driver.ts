import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {PastBookingPage} from "../past-booking/past-booking";
import {TripHistoryPage} from "../trip-history/trip-history";
import {ProfilePage} from "../profile/profile";
import {PendingBokingPage} from "../pending-boking/pending-boking";
import {StatisticsPage} from "../statistics/statistics";


/*
  Generated class for the Driver page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-driver',
  templateUrl: 'driver.html'
})
export class DriverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverPage');
  }

  goToTripHistoryPage()
  {
    this.navCtrl.push(TripHistoryPage);
  }

  goToStatisticsPage()
  {
    this.navCtrl.push(StatisticsPage);
  }

  goToProfilePage()
  {
    this.navCtrl.push(ProfilePage);
  }

  goToPastBookingPage()
  {
    this.navCtrl.push(PastBookingPage);
  }

  goToPendingBokingPage()
  {
    this.navCtrl.push( PendingBokingPage);
  }


}
