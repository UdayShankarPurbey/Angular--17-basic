import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UsdToInrPipe } from './usd-to-inr.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    CommonModule,
    UsdToInrPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  title = 'Pipes';
  dates = Date.now();

  user = {
    name : "Uday Kumar Purbey",
    age : 22
  }

  lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
}
