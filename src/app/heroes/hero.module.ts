import { NgModule } from '@angular/core';
import { HeroService } from './hero.service';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroDetailComponent } from './hero-detail.component';

export {
    HeroesListComponent, HeroDetailComponent
}

@NgModule({
    imports: [],
    // exports: [HeroesListComponent, HeroDetailComponent],
    declarations: [HeroesListComponent, HeroDetailComponent],
    providers: [HeroService],
})
export class HeroModule { }
