import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

        <h1>{{ titulo }}</h1>
        <h3>La base es: <strong> {{base}} </strong></h3>

        <!-- los eventos se definien con parentesis, en este caso el evento click -->
        <!-- dentro de las comillas podemos poner expresiones de javascript -->

        <button (click)="acumular(base)">+{{ base }}</button>

        <span> {{numero}} </span>

        <button (click)="acumular(-base)">-{{ base }}</button>
    
    `
})
export class ContadorComponent {
    public titulo: string = 'Contador App';

    base: number = 5;

    numero: number = 10;
    acumular(valor: number) {
        this.numero += valor;
    }
}