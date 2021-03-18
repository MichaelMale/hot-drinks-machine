/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HotDrinkService } from './hot-drink.service';

describe('Service: HotDrink', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotDrinkService]
    });
  });

  it('should ...', inject([HotDrinkService], (service: HotDrinkService) => {
    expect(service).toBeTruthy();
  }));
});
