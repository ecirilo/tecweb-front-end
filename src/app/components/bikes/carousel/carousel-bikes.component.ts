import { Component, Input, OnInit } from '@angular/core';
import {Bike} from "../model/bike.model";

@Component({
  selector: 'app-carousel-bikes',
  templateUrl: './carousel-bikes.component.html',
  styleUrls: ['./carousel-bikes.component.scss']
})
export class CarouselBikesComponent implements OnInit {

  @Input()
  bikes: Bike[] = [];

  constructor() { }

  ngOnInit(): void {
    //
  }

  imageSource(bike: Bike): string {
    return `data:${bike.imagemTipo};base64,${bike.imagem}`;
  }
}
