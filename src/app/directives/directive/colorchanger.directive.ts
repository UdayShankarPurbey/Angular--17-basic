import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorchanger]',
  standalone: true
})
export class ColorchangerDirective {

  constructor(private el : ElementRef) {
    el.nativeElement.style.color = 'orange';
    el.nativeElement.style.backgroundColor = 'yellow';
   }

}
