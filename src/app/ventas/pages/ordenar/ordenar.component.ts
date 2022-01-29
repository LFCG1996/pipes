import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  toCapital: boolean = false;
  leyenda: string = "Mayúsculas";
  tipo: string = '';
  
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Green Lantern',
      vuela: true,
      color: Color.verde
    }
  ];

  changeCapital () {
    this.toCapital = !this.toCapital;
    this.leyenda = !this.toCapital?'Mayúsculas':'Minúsculas';
  }
}
