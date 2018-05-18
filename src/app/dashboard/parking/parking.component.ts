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
  titleProject:string;

  constructor(private modalService: NgbModal, private _parkingService: ParkingService) { }

  ngOnInit() {
    this.getListParkings();
  }

  getListParkings(): void {
    this.listParkings = this._parkingService.getParkings();
  }

  open(content, id) {
    this.modalService.open(content);
    if (id) {
      this.getListImgs(id);
    }
  }

  getListImgs(id) {
    this.listImgs = [];
    this.listParkings.map(p => {
      if (p.id === id) {
        this.titleProject = p.title;
        this.listImgs = p.images
      }
    });
  }


}
