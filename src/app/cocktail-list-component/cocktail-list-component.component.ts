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

  constructor(public cocktailsService: CocktailService) { };

  ngOnInit() {
    this.cocktails = this.cocktailsService.getCocktails()
  }

}
