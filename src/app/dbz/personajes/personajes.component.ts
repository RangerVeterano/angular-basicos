import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //Estos personajes van a venir del componente padre
  // @Input() personajes: Personaje[] = []

  get personajes() {
    //Estamos llamando al getter del servicio
    return this.dbzService.personajes
  }

  constructor(private dbzService: DbzService) { }
}
