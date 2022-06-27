import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tecbike';
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        icon:'pi pi-fw pi-home',
        routerLink: '/'
      },
      {
        label: 'Bicicletas',
        icon:'pi pi-fw pi-car',
        routerLink: 'bikes'
      }
    ];
  }
}
