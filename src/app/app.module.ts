import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CocktailService } from './cocktail.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailListComponentComponent } from './cocktail-list-component/cocktail-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktailListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
