import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { authGuard } from './auth/guards/auth.guard';

const routes: Routes = [
{path:'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
{path:'heroes', loadChildren: ()=> import('./heroes/heroes.module').then(m => m.HeroesModule), canActivate:[authGuard]},
{path:'404',component:ErrorPageComponent},
{path:'**',redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
