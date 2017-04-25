import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeroesListComponent } from './heroes/hero.module';
import { HeroDetailComponent } from './heroes/hero.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, HeroesListComponent, HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
