import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventComponent } from './event/event.component';
import { GetvaluefrominputfieldComponent } from './getvaluefrominputfield/getvaluefrominputfield.component';
import { StyleComponent } from './style/style.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { ElseifComponent } from './elseif/elseif.component';
import { SwitchComponent } from './switch/switch.component';
import { ForloopComponent } from './forloop/forloop.component';
import { NestedforComponent } from './nestedfor/nestedfor.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { ToggleComponent } from './toggle/toggle.component';
import { MaterialUiComponent } from './material-ui/material-ui.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SendDataParentToChildModule } from './send-data-parent-to-child/send-data-parent-to-child.module';
import { ReusableModule } from './reusable/reusable.module';
import { SendDataChildToParentModule } from './send-data-child-to-parent/send-data-child-to-parent.module';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { PipesComponent } from './pipes/pipes.component';
import { UsdToInrPipe } from './pipes/usd-to-inr.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    EventComponent,
    GetvaluefrominputfieldComponent,
    StyleComponent,
    PropertybindingComponent,
    IfelseComponent,
    ElseifComponent,
    SwitchComponent,
    ForloopComponent,
    NestedforComponent,
    StylebindingComponent,
    HeaderComponent,
    FormComponent,
    ToggleComponent,
    MaterialUiComponent,
    TodoListComponent,
    SendDataParentToChildModule,
    ReusableModule,
    SendDataChildToParentModule,
    TwoWayBindingComponent,
    TemplateReferenceVariableComponent,
    PipesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'basic-01';
 
  
}
