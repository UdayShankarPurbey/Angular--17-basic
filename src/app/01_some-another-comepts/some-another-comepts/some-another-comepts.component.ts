import { Component } from '@angular/core';
import { CustomDirectiveComponent } from '../01_UseOfCustomDerictive/custom-directive/custom-directive.component';

@Component({
  selector: 'app-some-another-comepts',
  standalone: true,
  imports: [
    CustomDirectiveComponent
  ],
  templateUrl: './some-another-comepts.component.html',
  styleUrl: './some-another-comepts.component.scss'
})
export class SomeAnotherComeptsComponent {

}
