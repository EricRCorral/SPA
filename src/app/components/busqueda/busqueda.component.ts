import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private route: Router, ) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
    this.termino = params['termino'];
    this.heroes = this.heroesService.buscarHeroes(params['termino']);
    });
  }

}
