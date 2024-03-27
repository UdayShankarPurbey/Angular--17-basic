import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-material-ui',
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatIconModule,
  ],
  templateUrl: './material-ui.component.html',
  styleUrl: './material-ui.component.scss'
})
export class MaterialUiComponent {
  
}
