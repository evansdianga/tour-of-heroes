import { NgModule } from '@angular/core';
import { HeroService } from './hero.service';
import { HeroesListComponent } from './heroes-list/heroes-list.component'

export {
    HeroesListComponent
}

@NgModule({
    imports: [],
    exports: [HeroesListComponent],
    declarations: [HeroesListComponent],
    providers: [HeroService],
})
export class HeroModule { }
