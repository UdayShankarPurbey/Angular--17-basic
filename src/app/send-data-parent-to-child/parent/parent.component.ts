import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    ChildComponent
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  childValue = 10;
  IncrementValue() {
    this.childValue = this.childValue + 1;
  }
  decrementValue() {
    this.childValue = this.childValue - 1;
  }
}
