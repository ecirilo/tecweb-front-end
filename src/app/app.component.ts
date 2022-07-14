import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tecbike';
  items: MenuItem[] = [];

  constructor(protected authService: AuthService) {
  }

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
      },
      {
        label: 'Logout',
        icon:'pi pi-fw pi-car',
        command: () => {
          this.authService.logout();
        }
      }
    ];
  }
}
