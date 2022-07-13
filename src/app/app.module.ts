import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from "primeng/carousel";
import { ButtonModule } from "primeng/button";
import { CarouselBikesComponent } from './components/bikes/carousel/carousel-bikes.component';
import { MenubarModule } from "primeng/menubar";
import { BikesListComponent } from './components/bikes/list/bikes-list.component';
import { TableModule } from "primeng/table";
import { BikesAddComponent } from './components/bikes/add/bikes-add.component';
import { InputTextModule } from "primeng/inputtext";
import { HomeComponent } from './components/home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxMaskModule } from 'ngx-mask'
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { NgxWebstorageModule } from 'ngx-webstorage';
import {AuthHttpInterceptor, AuthModule} from "@auth0/auth0-angular";
import { environment } from "../environments/environment";

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
    ImageModule,
    InputTextModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AvatarModule,
    AvatarGroupModule,
    NgxMaskModule.forRoot(),
    NgxWebstorageModule.forRoot(),
    AuthModule.forRoot({...environment.auth,
      httpInterceptor: {
        allowedList: [`${environment.dev.serverUrl}/api/v1/*`]
      }
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
