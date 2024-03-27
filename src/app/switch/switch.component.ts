import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {
  dayVal : any;
  getDay(data : any) {
    this.dayVal = data
  }

}
