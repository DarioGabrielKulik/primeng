import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Auth } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  _auth!:Auth;
  constructor(private _http:HttpClient) { }

  
  get auth():Auth{
    return {...this._auth}
  }

  getAuth():Observable <Auth>{
    return this._http.get<Auth>('http://localhost:3000/usuarios/1')
    .pipe( tap( auth => this._auth = auth),
    tap( auth => localStorage.setItem('id', auth.id))
    )
  }
}
