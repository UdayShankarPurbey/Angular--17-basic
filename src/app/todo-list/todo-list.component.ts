import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  id = 0;
  tasks : {id : number , task : any , status: 'sucess' | 'failed'}[] = [];
  addTask(data : any) {
    this.tasks.push({id : this.id++, task : data ,status : 'failed'});
    
  }
 
  deleteTask(data : any) { 
    this.tasks = this.tasks.filter((x : any) => x.id != data);
  }

}
