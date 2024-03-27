import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  formData : any;
  getData(data : any) {
    console.log(data);
    this.formData = data;
  }

}
