import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, getTestBed, TestBed } from "@angular/core/testing"
import { DrinkType } from './drink-type';
import { HotDrinkService } from "./hot-drink.service";

describe('HotDrinkService', () => {
  let injector: TestBed;
  let hotDrinkService: HotDrinkService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HotDrinkService]
    });

    injector = getTestBed();
    hotDrinkService = injector.inject(HotDrinkService);
    httpMock = injector.inject(HttpTestingController);
  });

  describe('#getHotDrink', () => {
    it('should successfully call and access api to recieve hot drink',
    fakeAsync(() => {
      const mockResponse = {};

      hotDrinkService.getHotDrink(DrinkType.Chocolate).then(res => {
        expect(res).toBeTruthy();
      });

      httpMock.expectOne(request => request.url.endsWith('get-drink/1')
      && request.method === 'GET').flush(mockResponse);

    }));
  })
})
