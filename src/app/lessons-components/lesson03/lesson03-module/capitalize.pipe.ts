import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycapitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(word: string): string {
    return word.toLocaleUpperCase();
  }

}
