import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-c-t-p',
  standalone: true,
  imports: [],
  templateUrl: './child-c-t-p.component.html',
  styleUrl: './child-c-t-p.component.scss'
})
export class ChildCTPComponent {
  @Output() dataFromChildEvent = new EventEmitter();
  childData : any;
  getValue(data : any) {
    this.dataFromChildEvent.emit(data)
    this.childData = data;
  }

}
