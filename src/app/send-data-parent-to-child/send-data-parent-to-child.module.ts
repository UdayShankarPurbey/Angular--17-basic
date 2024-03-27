import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChildComponent,
    ParentComponent
  ],
  exports: [
    ChildComponent,
    ParentComponent
  ]
})
export class SendDataParentToChildModule { }
