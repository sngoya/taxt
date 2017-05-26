import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {PassengerRegistrationPage} from "../passenger-registration/passenger-registration";
import {DriverRegistrationPage} from "../driver-registration/driver-registration";

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  goToPassengerRegistrationPage()
  {
    this.navCtrl.push(PassengerRegistrationPage);
  }

  goToDriverRegistrationPage()
  {
    this.navCtrl.push(DriverRegistrationPage);
  }

}
