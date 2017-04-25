import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeroDetailComponent } from './heroes/hero-detail.component'
import { HeroService } from './heroes/hero.service'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
