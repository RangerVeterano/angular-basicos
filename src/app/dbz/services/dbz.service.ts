import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interdace';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        },
        {
            nombre: 'Krillin',
            poder: 4000
        }
    ]

    get personajes(): Personaje[] {
        //De esta forma conseguimos romper la referencia y nos curamos de que sea manipulado en otro sitio
        //con los ... separamos todos los elementos del array y con e [] creamos un array nuevo
        return [...this._personajes];
    }

    constructor() { }

    //metodo para añadir un personaje al arreglo de personajes
    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje)
    }

}