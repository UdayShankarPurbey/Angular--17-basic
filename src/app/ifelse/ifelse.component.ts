import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.scss'
})
export class IfelseComponent {
  expression = true;
  dataExpression = true;
  dataExpressionField = 'Hey';
  show() {
    this.expression = !this.expression;
  }

  showData() {
    this.dataExpression = !this.dataExpression;
  }

  showDataCondition() {
    if(this.dataExpressionField == 'Hey') {
      this.dataExpressionField = 'Hello'
    } else {
      this.dataExpressionField = 'Hey'

    }

  }
}
