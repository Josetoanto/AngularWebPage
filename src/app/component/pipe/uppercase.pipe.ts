import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase',
  standalone: true
})
export class UppercasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value; // Retorna el valor original si es nulo o indefinido
    return value.toUpperCase(); // Convierte a mayúsculas
  }

}