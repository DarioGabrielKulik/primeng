import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../../interfaces/interfaceHeroes';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  snipper:boolean = false;
  heroe!:Heroes;
  constructor(private activateRourter:ActivatedRoute, private _heroe:HeroesService){}

  ngOnInit(){
    this.snipper = true;

    this.activateRourter.params.pipe(
      switchMap( ({id}) => this._heroe.getHeroe(id))).subscribe(resp => {
        this.heroe = resp;
        console.log(this.heroe)
        this.snipper = false
      })
  }
}
