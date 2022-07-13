import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
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

  get(bikeId: number) : Observable<HttpResponse<Bike>> {
    return this.http.get<Bike>(this.url + "/" + bikeId, { observe: 'response' });
  }

  add(bike: Bike) : Observable<HttpResponse<Bike>> {
    return this.http.post<Bike>(this.url, bike, { observe: 'response' });
  }

  update(bike: Bike) : Observable<HttpResponse<Bike>> {
    return this.http.put<Bike>(this.url+ "/" + bike.id, bike, { observe: 'response' });
  }
}
