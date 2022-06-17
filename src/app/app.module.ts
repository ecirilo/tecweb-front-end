import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from "primeng/carousel";
import { ButtonModule } from "primeng/button";
import { CarouselBikesComponent } from './components/carousel/carousel-bikes.component';
import {MenubarModule} from "primeng/menubar";
import { BikesListComponent } from './components/bikes/list/bikes-list.component';
import {TableModule} from "primeng/table";
import { BikesAddComponent } from './components/bikes/add/bikes-add.component';
import {InputTextModule} from "primeng/inputtext";
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselBikesComponent,
    BikesListComponent,
    BikesAddComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ButtonModule,
    MenubarModule,
    TableModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
