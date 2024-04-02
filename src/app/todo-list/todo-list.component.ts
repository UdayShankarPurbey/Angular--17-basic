import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})

export class TodoListComponent {
  id = 0;
  selectedTaskId: number | null = null; // Track the ID of the task being edited
  tasks: { id: number, task: string, status: 'success' | 'failed' | 'notDefined' }[] = [];
  disptask: { id: number, task: string , status: 'success' | 'failed' | 'notDefined' }[] = [];
 

  addTask(data: any) {
    this.tasks.push({ id: this.id++, task: data, status: 'notDefined' });
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  editTask(taskId: any) {
    this.selectedTaskId = taskId; // Set the ID of the task being edited
  }


  updateTask(data: string) {
    console.log(data);

    const taskIndex = this.tasks.findIndex(task => task.id === this.selectedTaskId);
    if (taskIndex !== -1) {
      this.tasks[taskIndex].task = data;
      this.selectedTaskId = null; 
    }
  }

  checkTask( taskId: any) {
    const taskIndex = this.tasks.find(task => task.id === taskId);
    if(taskIndex) {
      taskIndex.status = 'success';
    }
  }

  uncheckedTask(taskId: any) {
    console.log(taskId);
    const taskIndex = this.tasks.find(task => task.id === taskId);
    if(taskIndex) {
      taskIndex.status = 'failed';
    }
  }

  completeTask() {
    this.disptask = this.tasks.filter(task => task.status == 'success')
    if(this.disptask.length < 1) {
      alert("No data found! Please try again")
    }
  }

  pendingTask() {
    this.disptask = this.tasks.filter(task => task.status == 'failed')
    if(this.disptask.length < 1) {
      alert("No data found! Please try again")
    }
  }

  allTask() {
    this.disptask = this.tasks
    if(this.disptask.length < 1) {
      alert("No data found! Please try again")
    }
  }
}