import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bike} from "../model/bike.model";

@Injectable({
  providedIn: 'root'
})
export class BikesService {

  url = "http://localhost:8080/api/v1/bikes"

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.url);
  }

  get(bikeId: number) : Observable<Bike> {
    return this.http.get<Bike>(this.url + "/" + bikeId);
  }

  add(bike: Bike) : Observable<Bike> {
    return this.http.post<Bike>(this.url, bike);
  }

  update(bike: Bike) : Observable<Bike> {
    return this.http.put<Bike>(this.url+ "/" + bike.id, bike);
  }
}
