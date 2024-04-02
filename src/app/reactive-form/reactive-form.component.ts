import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators ,  } from '@angular/forms'; 

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  
  rctForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.email]),
    password: new FormControl('',[Validators.minLength(3), Validators.maxLength(30)])
  })

  getData() {
    console.log(this.rctForm.value); 
  }

  get name23() {
    return this.rctForm.get('name');
  }

  get email() {
    return this.rctForm.get('email');
  }
  
  get password() {
    return this.rctForm.get('password');
  }
}
