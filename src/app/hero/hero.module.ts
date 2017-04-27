import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroService } from './hero.service';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

export {
    HeroesListComponent
}

@NgModule({
    imports: [BrowserModule, FormsModule],
    exports: [HeroesListComponent],
    providers: [HeroService],
    declarations: [HeroesListComponent, HeroDetailComponent],
})
export class HeroModule { }
