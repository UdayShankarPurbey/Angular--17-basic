import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentCTPComponent } from './parent-c-t-p/parent-c-t-p.component';
import { ChildCTPComponent } from './child-c-t-p/child-c-t-p.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ParentCTPComponent,
    ChildCTPComponent
  ],
  exports: [
    ParentCTPComponent,
    ChildCTPComponent
  ]
})
export class SendDataChildToParentModule { }
