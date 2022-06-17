import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bikes-add',
  templateUrl: './bikes-add.component.html',
  styleUrls: ['./bikes-add.component.scss']
})
export class BikesAddComponent implements OnInit {

  bikeId: number | undefined = undefined;

  constructor(protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.bikeId = params['id'];
    })
  }
}
