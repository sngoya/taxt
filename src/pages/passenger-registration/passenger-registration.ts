import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PassengerRegistration page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-passenger-registration',
  templateUrl: 'passenger-registration.html'
})
export class PassengerRegistrationPage {

  public data : any= {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  sumitForm(){
    console.log("Form is ready for submission");
  }

}
