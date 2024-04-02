import { Component } from '@angular/core';
import { ColorchangerDirective } from './directive/colorchanger.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [
    ColorchangerDirective
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  title = 'Directive in Angular'

}
