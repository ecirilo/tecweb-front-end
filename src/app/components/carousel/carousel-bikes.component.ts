import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-bikes',
  templateUrl: './carousel-bikes.component.html',
  styleUrls: ['./carousel-bikes.component.scss']
})
export class CarouselBikesComponent implements OnInit {

  @Input()
  bikes = [];

  constructor() { }

  ngOnInit(): void {
    //
  }
}
