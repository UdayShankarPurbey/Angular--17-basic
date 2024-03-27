import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildReusableComponent } from './child-reusable/child-reusable.component';
import { ParentReusableComponent } from './parent-reusable/parent-reusable.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChildReusableComponent,
    ParentReusableComponent
   
    
  ],
  exports: [
    ChildReusableComponent,
    ParentReusableComponent
  ]
})
export class ReusableModule { }
