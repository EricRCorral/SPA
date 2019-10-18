import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService,
              private route: Router, ) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  verHeroe( idx: number) {
    this.route.navigate(['/heroe', idx]);
  }

}
