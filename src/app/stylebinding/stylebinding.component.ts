import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  standalone: true,
  imports: [],
  templateUrl: './stylebinding.component.html',
  styleUrl: './stylebinding.component.scss'
})
export class StylebindingComponent {

  color = 'yellow';
  bgColor = 'red';
  ChangeStyle () {
    this.bgColor = this.bgColor ==='red'? 'blue' :'red';
    this.color = this.color === 'yellow'? 'white' : 'yellow';
  }

}
