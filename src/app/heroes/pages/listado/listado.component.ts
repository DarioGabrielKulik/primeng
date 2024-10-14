import { Component } from '@angular/core';
import { Heroes } from '../../interfaces/interfaceHeroes';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  heroes:Heroes[] = []
  constructor(private _api:HeroesService){}

  ngOnInit(){
    this.traerHeroes()
  }

  traerHeroes(){
    this._api.getListado().subscribe(resp => {
      this.heroes = resp;

    })
  }
}
