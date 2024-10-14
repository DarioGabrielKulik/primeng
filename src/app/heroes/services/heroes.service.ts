import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroes } from '../interfaces/interfaceHeroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http:HttpClient) { }

  getListado():Observable <Heroes[]>{
    return this.http.get<Heroes[]>('http://localhost:3000/heroes')
  }

  getHeroe(id:string):Observable <Heroes>{
    return this.http.get<Heroes>('http://localhost:3000/heroes/' + id)
  }


  agregarHeroe(heroe:Heroes):Observable <Heroes>{
    return this.http.post<Heroes>('http://localhost:3000/heroes',heroe)
  }

}
