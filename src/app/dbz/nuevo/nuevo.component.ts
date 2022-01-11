import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interdace';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {

  //inicializo variable para insertar personaje
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  //inyectamos nuestro servicio 
  constructor(private dbzService: DbzService) { }

  // Creamos el metodo que se encargará de emitir nuestro evento al padre
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  //Metodo que añade nuevos personajes
  agregar() {
    //comprobamos que el arreglo no esté vacío
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);

    // Emitimos el nuevo personaje al padre del componente
    // this.onNuevoPersonaje.emit (this.nuevo)

    //añadimos nuestro personaje
    this.dbzService.agregarPersonaje(this.nuevo)

    //vaciamos las variables, asignando un nuevo objeto vacio
    this.nuevo = { nombre: '', poder: 0 }

  }

}
