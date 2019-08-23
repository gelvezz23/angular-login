import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/models/user.model';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../login/shared/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor(private authenticationServ:AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit (form:NgForm){

    if (form.invalid) { return; }

    this.authenticationServ.registro(this.user)
      .subscribe(resp => {
        if (resp[0]['success'] == 0) {
          alert(resp[0]['mensaje']);
        } else {
          alert("Usuario registrado exitosamente");
        }
        
        },
        err => {
          console.log("Paila");
        }

        );

    // console.log(this.user);
    // console.log(form);
  }


}
