import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AttemptRowComponent } from './card/attempt-row/attempt-row.component';
import { provideRouter } from '@angular/router';
import { CardsViewComponent } from './cards-view/cards-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AttemptRowComponent,
    CardsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
