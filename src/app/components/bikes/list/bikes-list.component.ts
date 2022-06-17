import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.scss']
})
export class BikesListComponent implements OnInit {

  bikes = this.loadBikes();

  constructor() { }

  ngOnInit(): void {
  }

  loadBikes() : any {
    return [{
      id: 0,
      name: 'Caloi 10',
      marca: 'Caloi',
      image: 'https://caloi.com/wp-content/uploads/2020/08/caloi10-scaled.jpg',
      price: 1999,
      site: 'https://caloi.com/produto/caloi-10/'
    }, {
      id: 1,
      name: 'Barra Forte',
      marca: 'Monark',
      image: 'https://static.wixstatic.com/media/98c81d_159f55fc99004a90bfb704d8b25dc640~mv2.png/v1/fill/w_980,h_762,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/98c81d_159f55fc99004a90bfb704d8b25dc640~mv2.png',
      price: 999,
      site: 'https://www.monark.com.br/barra-circular-cp'
    }, {
      id: 2,
      name: 'Scale 910 AXS',
      marca: 'Scott',
      image: 'https://asset.scott-sports.com/fit-in/2000x2000/286/286318_1795838_png_original_1.png?signature=82ad13205a639968e4c428c2378ae76a60f4bf765d8254d2fc00724ede02adb9',
      price: 6999,
      site: 'https://www.scott-sports.com/br/pt/product/scott-scale-910-axs-bike?article=286318012'
    }];
  }
}
