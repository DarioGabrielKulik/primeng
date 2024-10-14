import { Component, Input } from '@angular/core';
import { Heroes } from '../../interfaces/interfaceHeroes';

@Component({
  selector: 'app-heroecard',
  templateUrl: './heroecard.component.html',
  styleUrl: './heroecard.component.css'
})
export class HeroecardComponent {
@Input()heroes:Heroes[]=[]


}
