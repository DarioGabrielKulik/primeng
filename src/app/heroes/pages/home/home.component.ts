import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../../interfaces/interfaceHeroes';
import { Router } from '@angular/router';
import { ServicesService } from '../../../auth/services/auth-services.service';
import { Auth } from '../../../auth/interfaces/auth';

interface City{
  name:string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sidebarVisible: boolean = false;


  constructor(private router:Router, private _authService:ServicesService){}

  get auth(){
    return this._authService.auth;
  }

  onClick(){
    this.router.navigate(['./auth'])
  }
}
