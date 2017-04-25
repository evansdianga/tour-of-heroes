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
  title = 'Tour of Heroes';

  ngOnInit() { }
}