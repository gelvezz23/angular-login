import { Component, OnInit } from '@angular/core';
import { StorageService } from "src/app/core/services/storage.service";
import { UserModel } from "src/app/core/models/user.model";
import { AuthenticationService } from "src/app/components/login/shared/authentication.service";
import { LoginObject } from '../login/shared/login-object.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public user: UserModel;
  public useer;

  constructor(private storageService: StorageService,
              private authenticationService: AuthenticationService,
              private router: Router
              ) { }

  ngOnInit() {
    this.useer = this.authenticationService.getCurrentUser();
  }

  logout () {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
