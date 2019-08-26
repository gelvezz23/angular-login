import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HomeComponent } from "src/app/components/home/home.component";

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html'
})
export class ProyectoComponent implements OnInit {

  proyecto:any = {};

  constructor(private actRoute:ActivatedRoute) {
    this.actRoute.params.subscribe(
      resp => {
        console.log(resp['id']);
        //this.proyecto = this.home.getProyectoById(resp['id']);
      });
   }

  ngOnInit() {
  }

}
