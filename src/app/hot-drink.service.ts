import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DrinkType } from './drink-type';
import { HotDrink } from './hot-drink';

@Injectable({
  providedIn: 'root'
})
export class HotDrinkService {
constructor(private http: HttpClient) { }

public getHotDrink = (drinkType: DrinkType): Promise<HotDrink> =>
  this.http.get<HotDrink>(`https://localhost:5001/get-drink/${drinkType}`).toPromise();


}
