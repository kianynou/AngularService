import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root'
})

export class CocktailService {

  constructor() { };

  public getCocktails(): Cocktail[] {
    return [
      {name: 'Bloody Mary', price: 6, img: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/bloody-mary.jpg?itok=8lQzuHXm'},
      {name: 'White Russian', price: 5, img: 'https://static.vinepair.com/wp-content/uploads/2017/11/white-russian-inside.jpg'},
      {name: 'Manhattan', price: 7, img: 'https://static.vinepair.com/wp-content/uploads/2017/11/manhattan-inside.jpg'},
  ];
  }

}
