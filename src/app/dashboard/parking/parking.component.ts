import { Component, OnInit, Input } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { Parking, Images } from '../../_models/parking';
import { ParkingService } from '../../_services/parking.service';

@Component({
  selector: 'parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
  closeResult: string;
  images: Array<string>;

  listParkings: Parking[];
  listImgs: Images[];
  titleProject: string;

  typeModal: string;
  conductor: string;
  idParking: number;

  constructor(private modalService: NgbModal, private _parkingService: ParkingService) {
    this.typeModal = '';
    this.conductor = '';
  }

  ngOnInit() {
    this.getListParkings();
  }

  getListParkings(): void {
    this.listParkings = this._parkingService.getParkings();
  }

  open(content, id, type) {
    this.typeModal = type;
    this.conductor = '';
    this.modalService.open(content);
    if (id) {
      this.idParking = id;
      this.getListImgs(id);
    }
  }

  updateParking() {
    this.listParkings.forEach(p => {
      if (this.idParking === p.id) {
        p.conducteur = this.conductor
        p.libre = false
        p.date = new Date()
      }
    })
    if (this.listParkings) {
      this._parkingService.updateParking(this.listParkings);
    }
  }

  removeParking() {
    this.listParkings.forEach(p => {
      if (this.idParking === p.id) {
        p.conducteur = ''
        p.libre = true
        p.date = null
      }
    })
    if (this.listParkings) {
      this._parkingService.updateParking(this.listParkings);
    }
  }

  clearParking() {
    this._parkingService.clearParking();
    this.getListParkings();
  }

  getListImgs(id) {
    this.listImgs = [];
    this.listParkings.map(p => {
      if (p.id === id) {
        this.titleProject = p.title
        this.listImgs = p.images
      }
    });
  }


}
