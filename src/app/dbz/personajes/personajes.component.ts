import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interdace';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
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
