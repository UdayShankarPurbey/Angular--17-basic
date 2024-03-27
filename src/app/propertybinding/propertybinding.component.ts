import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  standalone: true,
  imports: [],
  templateUrl: './propertybinding.component.html',
  styleUrl: './propertybinding.component.scss'
})
export class PropertybindingComponent {
  property1 : string = 'property 1'
  property2 : string = 'property 2'
  property3 : string = 'property 3'

  property4 : boolean = false
  property5 : boolean = false
  propertyBinding() {
    this.property4 = !this.property4
  }
  interpolation() {
    this.property5 = !this.property5
  }

}
