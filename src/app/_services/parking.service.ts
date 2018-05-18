import { Injectable } from '@angular/core';
import { Parking } from '../_models/parking';
import { PARKINGS } from '../_mocks/mock-parking';

@Injectable()
export class ParkingService {

  constructor() { }

  getParkings(): Parking[] {
    let parkings: string = JSON.parse(localStorage.getItem("parkings"));
    if (!parkings) {
      localStorage.setItem("parkings", JSON.stringify(PARKINGS));
    }
    return JSON.parse(localStorage.getItem("parkings"));;
  }

}
