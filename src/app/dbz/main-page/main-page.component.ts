import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interdace';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  //Valor por defecto
  nuevo: Personaje = {
    nombre: 'Gotens',
    poder: 10000
  }

  //Esto se cononce como una inyeccion de dependencias, es muy fuerte
  constructor(private dbzService: DbzService) { }
}
