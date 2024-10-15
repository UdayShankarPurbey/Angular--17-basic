import { Directive, ElementRef, input, Input } from '@angular/core';

@Directive({
  selector: '[appColorChanger]',
  host : {
    '(click)': 'changeColor()'
  },
  standalone: true
})
export class ColorChangerDirective {

  @Input () number : number = 0;
  @Input() disibleBy : number = 1;

  constructor(
    private el : ElementRef
  ) { }


  changeColor() {
    if(this.number % this.disibleBy === 0) {
      this.el.nativeElement.style.color ='blue';
    } else {
      this.el.nativeElement.style.color = 'green';
    }
  }

}
