import { Component } from '@angular/core';
import { ChildCTPComponent } from '../child-c-t-p/child-c-t-p.component';

@Component({
  selector: 'app-parent-c-t-p',
  standalone: true,
  imports: [
    ChildCTPComponent
  ],
  templateUrl: './parent-c-t-p.component.html',
  styleUrl: './parent-c-t-p.component.scss'
})
export class ParentCTPComponent {
  parentData : any;
  dataFromChild(data : any) {
    console.log(data);
    this.parentData = data;
  }

}
