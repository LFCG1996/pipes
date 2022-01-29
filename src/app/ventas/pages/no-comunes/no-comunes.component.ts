import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Luis';
  genero: string = 'M';
  invitacionMapa = {
    'M': 'invitarlo',
    'F': 'invitarla'
  }

  cambiarPersona() {
    if(this.genero === 'M') {
      this.nombre = 'Daniela';
      this.genero = 'F';
      return;
    }
    this.nombre = 'Luis';
    this.genero = 'M';
  }

  //i18nPlural
  clientes: string[] = ['Yessica','Jaquelinee','Luis','Daniela','Jennifer'];

  pluralMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  borrarCliente() {
    if(this.clientes.length > 0) {
      this.clientes.pop();
    } else {
      this.clientes = ['Yessica','Jaquelinee','Luis','Daniela','Jennifer'];
    }
  }

  //KeyValuePipe
  persona = {
    nombre: 'Luis',
    edad: 25,
    direccion: 'Tláhuac, CDMX'
  }

  //AsyncPipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('Fin de la promesa.');
    },3500);
  });
}