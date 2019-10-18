import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas

import { APPROUTING } from './app.routes';


// Servicios

import { HeroesService } from './servicios/heroes.service';


// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BusquedaComponent,
    HeroeTarjetaComponent,
  ],
  imports: [
    BrowserModule,
    APPROUTING,
  ],
  providers: [HeroesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
