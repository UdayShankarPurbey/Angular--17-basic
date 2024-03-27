import { Component } from '@angular/core';

@Component({
  selector: 'app-getvaluefrominputfield',
  standalone: true,
  imports: [],
  templateUrl: './getvaluefrominputfield.component.html',
  styleUrl: './getvaluefrominputfield.component.scss'
})
export class GetvaluefrominputfieldComponent {
  NameValue = '';
  EmailValue = '';
  getValue(data: string){
    this.NameValue = data;
  }

 getValueData(data: string){
    this.EmailValue = data;
 }

 Value = 0;
 counter(data: string) {
  data == 'add' ? this.Value++ : this.Value--
 }
}
