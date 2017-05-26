import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DriverRegistration page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-driver-registration',
  templateUrl: 'driver-registration.html'
})
export class DriverRegistrationPage {

  public data2 : any= {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  sumitForm(){
    console.log("form is ready");
  }

}
