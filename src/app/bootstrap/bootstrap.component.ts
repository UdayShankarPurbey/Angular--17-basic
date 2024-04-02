import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bootstrap',
  standalone: true,
  imports: [
    NgbAlertModule
  ],
  templateUrl: './bootstrap.component.html',
  styleUrl: './bootstrap.component.scss'
})
export class BootstrapComponent {

}
