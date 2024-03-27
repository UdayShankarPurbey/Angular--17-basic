import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToInr',
  standalone: true
})
export class UsdToInrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    let price = args[0];
  
    return value*price;
  }

}
