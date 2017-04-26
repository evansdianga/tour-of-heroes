import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
@Injectable()
export class HeroService {

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    getHeroesVerbosely(): Promise<Hero[]> {
        return new Promise(function (resolve, reject) {
            return resolve(HEROES);
        });
    }

    getHeroesSuccinct(): Promise<Hero> {
        return new Promise((resolve, reject) => {
            return resolve(HEROES);
        });
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.getHeroes()), 3000);
        });
    }

    getHeroesAndFail(): Promise<Hero[]> {
        return new Promise((resolve, reject) => {
            reject('Fail');
            setTimeout(() => resolve(this.getHeroes()), 3000);
        });
    }
}
