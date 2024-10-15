import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ColorChangerDirective } from '../ColorChanger/color-changer.directive';

@Component({
  selector: 'app-custom-directive',
  standalone: true,
  imports: [
    CommonModule,
    ColorChangerDirective
  ],
  templateUrl: './custom-directive.component.html',
  styleUrl: './custom-directive.component.scss'
})
export class CustomDirectiveComponent {

  number : number = 36;

  isClicked : boolean = false;

  toggleClick() {
    this.isClicked =!this.isClicked;
  }
}
