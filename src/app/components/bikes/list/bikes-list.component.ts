import {Component, Input, OnInit} from '@angular/core';
import {BikesService} from "../service/bikes-service.service";
import {Bike} from "../model/bike.model";

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.scss']
})
export class BikesListComponent implements OnInit {

  bikes: Bike[] = [];

  constructor(private bikesService: BikesService) { }

  ngOnInit(): void {
    this.bikesService.getAll()
      .subscribe((response) => this.bikes = response);
  }
}
