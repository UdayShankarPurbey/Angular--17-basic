import { Component } from '@angular/core';
import { CustomDirectiveComponent } from '../01_UseOfCustomDerictive/custom-directive/custom-directive.component';
import { CustomDirectivesPractiseComponent } from '../01_UseOfCustomDerictive/practise/custom-directives-practise/custom-directives-practise.component';
import { CustomDirectivesPractise02Component } from '../01_UseOfCustomDerictive/practise/custom-directives-practise-02/custom-directives-practise-02.component';

@Component({
  selector: 'app-some-another-comepts',
  standalone: true,
  imports: [
    CustomDirectiveComponent,
    CustomDirectivesPractiseComponent,
    CustomDirectivesPractise02Component
  ],
  templateUrl: './some-another-comepts.component.html',
  styleUrl: './some-another-comepts.component.scss'
})
export class SomeAnotherComeptsComponent {

}
