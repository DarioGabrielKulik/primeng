import { Component } from '@angular/core';
import { Heroes } from '../../interfaces/interfaceHeroes';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
termino!:Heroes;
heroes!:Heroes[] ;
sugerencia:any;
mostrar:boolean = false
constructor(private _heroes:HeroesService){}

ngOnInit(){
  this.buscando();
}

buscando(){
  this._heroes.getListado().subscribe(resp => {
    this.heroes = resp
  })
}

buscar(ev:any){
  this.mostrar = false
  this.sugerencia = this.heroes.filter( hero => hero.superhero.toLowerCase().includes(ev.query));

}
ver(){
  this.mostrar = true
  console.log(this.termino)
}
}