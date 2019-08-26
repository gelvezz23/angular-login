import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthenticationService } from "src/app/components/login/shared/authentication.service";

@Injectable()
export class ProyectoService {

    public usuid;
    
    constructor (private http: HttpClient,
                 private authenticationService: AuthenticationService
                 ) { }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }

    getProjects (usuid) {
        return this.http.post("http://localhost:8888/APIPRUEBA1-master/GetAllProyecto.php", {usuid});          
    }

    getProjectById () {
    }

    deleteProject (proyectoid) {
        return this.http.post("http://localhost:8888/APIPRUEBA1-master/EliminarProyecto.php", {proyectoid})
        .subscribe(
            resp => {
                console.log(resp);
            },
            err => {
                console.log(err);
                
            }
        );
    }
}