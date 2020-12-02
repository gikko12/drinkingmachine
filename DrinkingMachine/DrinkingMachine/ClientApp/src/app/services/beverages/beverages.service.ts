import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Beverage} from "src/app/services/beverages/beverage";
import {map} from "rxjs/operators";
import {BeverageEnum} from "src/app/enums/beverage.enum";

@Injectable({
  providedIn: 'root'
})
export class BeveragesService {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {
    this.baseUrl = this.baseUrl + 'beverages';
  }

  public getListBeverages(): Observable<Array<Beverage>> {
    return this.http.get(this.baseUrl)
      .pipe(
        map(response => <Array<Beverage>>response)
      );
  }

  public getBeverage(beverage: BeverageEnum): Observable<Beverage> {
    return this.http.get(this.baseUrl + `/${beverage}`)
      .pipe(
        map(response => <Beverage>response)
      );
  }
}
