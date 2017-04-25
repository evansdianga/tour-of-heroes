import { Component, OnInit } from '@angular/core';
import { Hero } from './heroes/hero'
import { HeroService } from './heroes/hero.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService],
})
export class AppComponent implements OnInit {
  constructor(private heroService: HeroService) { }
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}