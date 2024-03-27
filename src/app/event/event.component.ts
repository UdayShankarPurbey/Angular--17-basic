import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  getdata() {
    console.log("uday");
  }
  getboxData(data : string) {
    console.log(data);
  }

  geteve(data : string) {
    console.log(data);
  }
}
