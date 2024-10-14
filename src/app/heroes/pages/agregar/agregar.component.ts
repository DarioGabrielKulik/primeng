import { Component } from '@angular/core';
import { Hero, Heroes } from '../../interfaces/interfaceHeroes';
import { HeroesService } from '../../services/heroes.service';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
value!:string;
img!:string;
cities: City[] | undefined;

selectedCity: City | undefined;

constructor(private _serviceHero:HeroesService){}

ngOnInit() {
    this.cities = [
        { name: 'Comic', code: 'NY' },
        { name: 'Marvel', code: 'RM' },

    ];
}

heroes:Heroes = {
  id: '',
  superhero: '',
  publisher: '',
  alter_ego: '',
  first_appearance: '',
  characters: ''
}

guardar(){
  this._serviceHero.agregarHeroe(this.heroes)
  console.log(this.heroes)
}


}
