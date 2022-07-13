import { Component, OnInit } from '@angular/core';
import { BikesService } from "../bikes/service/bikes-service.service";
import { Bike } from "../bikes/model/bike.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bikes: Bike[] = [];

  constructor(protected bikesService: BikesService) { }

  ngOnInit(): void {
    this.bikesService.getAll()
      .subscribe((response) => this.bikes = response);
  }
}
