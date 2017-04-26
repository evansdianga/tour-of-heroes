import { Component, OnInit } from '@angular/core';
import { HeroesListComponent } from './hero/hero.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  ngOnInit() { }
}