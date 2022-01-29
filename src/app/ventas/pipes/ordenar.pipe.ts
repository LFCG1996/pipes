import { Pipe, PipeTransform } from '@angular/core';
import { Color, Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], tipo: string = ''): Heroe[] {
    return tipo.toUpperCase() === 'N' ?   //nombre
            (heroes.sort((a, b) => a.nombre > b.nombre ? 1 : -1)) :
              (tipo.toUpperCase() === 'C' ?  //color
                (heroes.sort((a, b) => Color[a.color] > Color[b.color] ? 1 : -1)) :
                (tipo.toUpperCase() === 'V' ? //vuela
                  (heroes.sort((a, b) => a.vuela < b.vuela ? 1 : -1)) :
                  heroes
                )  
              );
  }

}
