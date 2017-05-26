export class RideModel {
  constructor(public _id: string,
              public departure: string,
              public destination: string,
              public rideDate: Date = new Date()) {
  }
}
