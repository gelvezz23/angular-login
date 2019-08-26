import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectoComponent } from "./components/proyecto/proyecto.component";
import { AuthorizatedGuard } from './core/guards/authorizated.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthorizatedGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'proyecto/:id'   , component: ProyectoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
