import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionPipe',
  standalone: true
})
export class DescriptionPipePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    const newValue = value.charAt(0).toUpperCase() + value.slice(1);

    return newValue.endsWith('.') ? newValue : `${newValue}.`;
  }

}
