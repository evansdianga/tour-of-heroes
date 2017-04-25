import { Component } from '@angular/core';
import { Hero } from './heroes/hero'
import { HeroService } from './heroes/hero.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [HeroService],
})
export class AppComponent {
  constructor(private heroservice: HeroService) { }
  title = 'Tour of Heroes';
  heroes: Hero;
  selectedHero: Hero;

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}