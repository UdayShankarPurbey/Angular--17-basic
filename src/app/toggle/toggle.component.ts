import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss'
})
export class ToggleComponent {
  display = false;

  toggleValue() {
    this.display =!this.display;
  }

}
