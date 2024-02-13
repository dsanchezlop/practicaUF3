import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollarToEuro'
})
export class DollarToEuroPipe implements PipeTransform {

  transform(value: number): number {
    return value * 0.93;
  }

}