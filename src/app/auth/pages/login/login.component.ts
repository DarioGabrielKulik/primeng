import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../services/auth-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
value:string = '';

constructor(private router:Router, private _auth:ServicesService){}

ingresar(){
  this._auth.getAuth().subscribe( auth => {
    console.log(auth)
  })
  this.router.navigate(['./heroes/listado'])
}
}
