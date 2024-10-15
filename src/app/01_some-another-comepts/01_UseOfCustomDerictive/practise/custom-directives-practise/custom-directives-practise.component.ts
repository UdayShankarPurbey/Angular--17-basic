import { Component } from '@angular/core';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-directives-practise',
  standalone: true,
  imports: [
    TooltipDirective,
    CommonModule
  ],
  templateUrl: './custom-directives-practise.component.html',
  styleUrl: './custom-directives-practise.component.scss'
})
export class CustomDirectivesPractiseComponent {

}
