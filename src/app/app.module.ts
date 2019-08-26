import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

//Rutas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Servicios
import { ProyectoService } from "./core/services/proyecto.service";

//Componentes
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProyectoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
