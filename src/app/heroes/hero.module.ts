import { NgModule } from '@angular/core';
import { HeroService } from './hero.service';
import { HeroesListComponent } from './heroes-list/heroes-list.component'

@NgModule({
    imports: [],
    exports: [],
    declarations: [HeroesListComponent],
    providers: [HeroService],
})
export class HeroModule { }
