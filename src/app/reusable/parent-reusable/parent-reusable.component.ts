import { Component } from '@angular/core';
import { ChildReusableComponent } from '../child-reusable/child-reusable.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-reusable',
  standalone: true,
  imports: [
    CommonModule,
    ChildReusableComponent
  ],
  templateUrl: './parent-reusable.component.html',
  styleUrl: './parent-reusable.component.scss'
})
export class ParentReusableComponent {
  userLists = [
    {name : 'John', email : 'johannes@gmail.com'},
    {name : 'Jane', email : 'jane@gmail.com'},
    {name : 'Mary', email :'mary@gmail.com'},
    {name : 'Peter', email : 'peter@gmail.com'}
  ]

}
