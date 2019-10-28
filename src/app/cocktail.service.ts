import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root'
})

export class CocktailService {

  constructor( private cocktails: HttpClient ) { };


  public getCocktails(): Observable<Cocktail[]> {
    return this.cocktails.get<Cocktail[]>("assets/cocktails.json");
    };
  }


