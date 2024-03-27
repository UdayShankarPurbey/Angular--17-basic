import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-elseif',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './elseif.component.html',
  styleUrl: './elseif.component.scss'
})
export class ElseifComponent {
  marks : number  = 0;
  getMarks(data : any) {
    this.marks = data

  }

}
