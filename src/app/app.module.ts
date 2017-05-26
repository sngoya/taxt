import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { TaxiApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RideListPage } from '../pages/ride-list/ride-list';
import { ConfirmationPage } from '../pages/confirmation/confirmation';

import { MapComponent } from '../components/map/map';
import { SearchPage } from '../pages/search/search';

import { RideService } from '../providers/ride/ride.service';
import { GeocoderService } from '../providers/map/geocoder.service';
import { MapService } from '../providers/map/map.service';
import { DriverRegistrationPage } from '../pages/driver-registration/driver-registration';
import { RegisterPage } from '../pages/register/register';
import { PassengerRegistrationPage } from '../pages/passenger-registration/passenger-registration';
import { PastBookingPage } from '../pages/past-booking/past-booking';
import { PendingBokingPage } from '../pages/pending-boking/pending-boking';
import { ProfilePage } from '../pages/profile/profile';
import { StatisticsPage } from '../pages/statistics/statistics';
import { TripHistoryPage } from '../pages/trip-history/trip-history';

@NgModule({
  declarations: [
    TaxiApp,
    HomePage,
    RideListPage,
    MapComponent,
    RegisterPage,
    SearchPage,
    ConfirmationPage,
    PastBookingPage,
    PendingBokingPage,
    PassengerRegistrationPage,
    StatisticsPage,
    TripHistoryPage,
    ProfilePage,
    DriverRegistrationPage
  ],
  imports: [
    IonicModule.forRoot(TaxiApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TaxiApp,
    HomePage,
    RideListPage,
    TripHistoryPage,
    SearchPage,
    PastBookingPage,
    StatisticsPage ,
    ConfirmationPage,
    PassengerRegistrationPage, ProfilePage ,
    RegisterPage,
    PendingBokingPage,
    DriverRegistrationPage
  ],
  providers: [RideService, GeocoderService, MapService],
})
export class AppModule {
}
