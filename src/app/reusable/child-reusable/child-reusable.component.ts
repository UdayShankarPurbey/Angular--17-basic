import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-reusable',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './child-reusable.component.html',
  styleUrl: './child-reusable.component.scss'
})
export class ChildReusableComponent {
  @Input() user: {name : any , email : string} = {name : '',email : ''};


}
