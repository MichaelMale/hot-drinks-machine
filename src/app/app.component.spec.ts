import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from "@angular/core/testing";
import { Mock } from "ts-mocks";
import { AppComponent } from "./app.component"
import { DrinkType } from "./drink-type";
import { HotDrink } from "./hot-drink";
import { HotDrinkService } from "./hot-drink.service";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockHotDrinkService: Mock<HotDrinkService>;

  const setupComponent = () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  };

  beforeEach(waitForAsync(() => {
    mockHotDrinkService = new Mock<HotDrinkService>({
      getHotDrink: () => Promise.resolve(
        <HotDrink>{
          id: DrinkType.Chocolate,
          name: 'Chocolate',
          steps: ['Step 1', 'Step 2', 'Step 3'],
          image: 'chocolate.jpg'
        }
      )
    });

    TestBed.configureTestingModule({
      imports: [

      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: HotDrinkService, useFactory: () => mockHotDrinkService.Object }
      ]
    });
  }));

  describe('#makeDrink', () => {
    it('should correctly call HotDrinkService', () => {
      setupComponent();
      component.makeDrink(DrinkType.Chocolate);
      expect(component['hotDrinkService'].getHotDrink).toHaveBeenCalled();
    });

    it('should assign variable', fakeAsync(() => {
      setupComponent();
      component.makeDrink(DrinkType.Chocolate);
      tick();
      expect(component.drink).toBeTruthy();
    }));
  });

  describe('#reset', () => {
    it('should reset', () => {
      setupComponent();
      component.drink = <HotDrink>{};
      component.reset();
      expect(component.drink).toBeUndefined();
    });
  })

})
