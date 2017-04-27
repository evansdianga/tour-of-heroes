import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero/hero.service';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) { }
  async getHeroes(): Promise<Hero[]> {
    return await this.heroService.getHeroesSlowly();
  }

  async ngOnInit() {
    const myHeroes = await this.getHeroes();
    this.heroes = myHeroes.splice(1, 5);
  }

}
