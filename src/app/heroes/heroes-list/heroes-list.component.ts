import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  async getHeroes(): Promise<Hero[]> {
    try {
      return Promise.resolve(await this.heroService.getHeroesSlowly());
    } catch (err) {
      console.log(err);
    }
  }

  onSelectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  async ngOnInit() {
    this.heroes = await this.getHeroes();
  }

}
