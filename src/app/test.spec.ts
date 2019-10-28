import { TestBed, async } from '@angular/core/testing';
import { CocktailListComponentComponent } from './cocktail-list-component/cocktail-list-component.component';
import { CocktailService } from './cocktail.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {Observable, of} from "rxjs";

describe('Quest Test Suite', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, BrowserModule],
      declarations: [
        CocktailListComponentComponent
      ],
    }).compileComponents();
  }));

  fit('service should be created', () => {
    const service: CocktailService = TestBed.get(CocktailService);
    expect(service).toBeTruthy();
  });

  fit('service should have a "getCocktails" method which returns an Observable<Cocktail[]> object', () => {
    const service: CocktailService = TestBed.get(CocktailService);
    service.getCocktails().subscribe(
      (param_cocktails: any[]) => {
        expect(param_cocktails.length).toBeGreaterThan(0);
      }
    )
  });

  fit('should create a CocktailListComponent instance', async(() => {
    const fixture = TestBed.createComponent(CocktailListComponentComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  fit(
    'component should have a public property named "cocktails"',
    async(
      () => {
        const fixture = TestBed.createComponent(CocktailListComponentComponent);
        fixture.detectChanges();
        expect(fixture.componentInstance.cocktails).toBeTruthy();
      }
    )
  );

  fit(
    'component should display at least one cocktail',
    async(
      () => {
        const fixture = TestBed.createComponent(CocktailListComponentComponent);
        const service: CocktailService = TestBed.get(CocktailService);
        const mock:Observable<any> = of([
          {
            name: "bloody mary", 
            price: 1, 
            img: "https://i.4pcdn.org/s4s/1398123404333.gif"
          }
        ]);

        spyOn(service, "getCocktails").and.returnValue( mock );

        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        const content = compiled.textContent;
        const first = fixture.componentInstance.cocktails[0];
        console.log(fixture.componentInstance.cocktails, first);
        expect(content).toContain(first.name);
      }
    )
  );
});