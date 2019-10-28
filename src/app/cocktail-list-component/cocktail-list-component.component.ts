import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.css'],
})
export class CocktailListComponentComponent implements OnInit {

  public cocktails: Cocktail[];
  private service: CocktailService;

  constructor(public cocktailsService: CocktailService) { 
    this.service = cocktailsService;
  };

  public ngOnInit(): void {
    this.service.getCocktails().subscribe(
      (cocktailResponse:Cocktail[]) => {
        this.cocktails = cocktailResponse;
      });
  }

}
