import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taxe'
})
export class TaxePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let taxe = args[0] || 20;
    let result = value * (1 + taxe / 100);
        
    return result.toFixed(2).replace('.',',') + ' €'
  }

}
