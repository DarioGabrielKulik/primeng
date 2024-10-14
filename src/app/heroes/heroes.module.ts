import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { HeroecardComponent } from './components/heroecard/heroecard.component';
import { ImagePipe } from './pipes/image.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroecardComponent,
    ImagePipe
  ],exports:[

  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    PrimeNgModule,
    FormsModule
  ]
})
export class HeroesModule { }
