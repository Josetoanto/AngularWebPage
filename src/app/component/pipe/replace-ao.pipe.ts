import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceAO',
  standalone: true
})
export class ReplaceAOPipe implements PipeTransform {

  transform(value: string): string {
      if (!value) return value; // Retorna el valor original si es nulo o indefinido
      
      return value.replace(/[ao]/gi, 'x'); // Reemplaza todas las "a" y "o" con "x" (mayúsculas y minúsculas)
    }
}
