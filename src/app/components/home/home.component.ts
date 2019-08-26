import { Component, OnInit } from '@angular/core';
import { StorageService } from "src/app/core/services/storage.service";
import { UserModel } from "src/app/core/models/user.model";
import { AuthenticationService } from "src/app/components/login/shared/authentication.service";
import { LoginObject } from '../login/shared/login-object.model';
import { Router } from '@angular/router';
import { ProyectoService } from "src/app/core/services/proyecto.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  //public user: UserModel;
  public user;
  public usuid;
  public proyectos :any= [];

  constructor(private storageService: StorageService,
              private authenticationService: AuthenticationService,
              private proyectoService: ProyectoService,
              private router: Router
              ) { }

  ngOnInit() {
    this.user = this.authenticationService.getCurrentUser();
    this.usuid = this.authenticationService.getUsuid();
    this.proyectoService.getProjects(this.usuid).subscribe(
      resp => {
        this.proyectos = resp;
        console.log(resp);        
      },
      err => {
        console.log(err);}
    );
  }

  getProyectoById (id:string) {
    return this.proyectos[id];
  }

  deleteProject () {
    this.proyectoService.deleteProject(this.proyectos[2]['proyectoid']);
    console.log(this.proyectos[2]['proyectoid']);
    this.router.navigate(['/home']);
  }

  logout () {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
