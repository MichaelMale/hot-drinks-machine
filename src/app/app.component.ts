import { Component } from '@angular/core';
import { DrinkType } from './drink-type';
import { HotDrink } from './hot-drink';
import { HotDrinkService } from './hot-drink.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public drink?: HotDrink;
  drinkType = DrinkType;

  constructor(
    private hotDrinkService: HotDrinkService
  ) {
  }

  public makeDrink = (type: DrinkType) =>
    this.hotDrinkService.getHotDrink(type).then((drink) => {
      this.drink = drink;
    });

  public reset = () => this.drink = undefined;
}
