import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../login/shared/authentication.service';
import { LoginObject } from './shared/login-object.model';
import { Session } from 'src/app/core/models/session.model';
import { StorageService } from "src/app/core/services/storage.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginObj: LoginObject = new LoginObject();

  constructor(private authenticationServ:AuthenticationService, private storageServ:StorageService, private router:Router) { }

  ngOnInit() {
  }

  login (form:NgForm) {

    if (form.invalid) { return; }

    this.authenticationServ.login(this.loginObj)
      .subscribe( resp => {
        console.log(resp);
        this.router.navigate(['/home']);
      },
        err => {
          console.log("Paila login");
        }

      );

    console.log(this.loginObj);
    console.log(form);
  }

  private correctLogin(data: Session){
    this.storageServ.setCurrentSession(data);
    this.router.navigate(['/home']);
  }
  
}