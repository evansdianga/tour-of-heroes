import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero'
@Component({
    moduleId: module.id,
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent {
    @Input() hero: Hero;

}