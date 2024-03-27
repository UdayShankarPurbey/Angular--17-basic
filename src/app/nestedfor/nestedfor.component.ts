import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nestedfor',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './nestedfor.component.html',
  styleUrl: './nestedfor.component.scss'
})
export class NestedforComponent {
  userDetails = [
    { name : 'John', email : 'johannes@gmail.com' , socialAccount : [ 'facebook' , 'twitter' ] },
    { name : 'Jane', email : 'jane@gmail.com' , socialAccount : [ 'youtube' , 'instagram' ] },
    { name : 'Mary', email :'mary@gmail.com' , socialAccount : [ 'snaptube' , 'snapchat' ] },
    { name : 'Peter', email : 'peter@gmail.com' , socialAccount : [ 'x' , 'whatsapp' ] },
  ]

}
