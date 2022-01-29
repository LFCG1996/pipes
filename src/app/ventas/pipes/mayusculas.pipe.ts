import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'capitalize'
})
export class MayusculasPipe implements PipeTransform {
    transform(valor: string, isMayus: boolean = true): string {
        return isMayus?valor.toUpperCase():valor.toLocaleLowerCase();
    }
}