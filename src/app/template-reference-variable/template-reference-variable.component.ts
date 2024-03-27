import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  standalone: true,
  imports: [],
  templateUrl: './template-reference-variable.component.html',
  styleUrl: './template-reference-variable.component.scss'
})
export class TemplateReferenceVariableComponent {
  nameFromTemplate : any;
  getName(item : any) {
    this.nameFromTemplate = item
  }

}
