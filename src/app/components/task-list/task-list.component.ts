import { Component } from '@angular/core';
import { ITask } from '../../models/task.model';
import { TaskComponent } from './components/task/task.component';

@Component({
  selector: 'app-task-list',
  imports: [TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  public taskListPending: ITask[] = [];
  public taskListCompleted: ITask[] = [];
  public showInputTask: boolean = false;
  public errorInputTask: boolean = false;
  public showCompleted: boolean = false;

  showInputTextTask() {
    this.showInputTask = true;
  }

  createTask(description: string) {

    if (description.trim()) {
      const task: ITask = {
        date: new Date(),
        description: description.trim(),
        completed: false,
      }

      this.taskListPending.push(task);
      this.showInputTask = false;
      console.log(this.taskListPending);
      this.errorInputTask = false;
    } else {
      this.errorInputTask = true;
    }

  }

  removeTask(index: number) {
    this.taskListPending.splice(index, 1);
  }

  completeTask(index: number) {
    const task = this.taskListPending[index];
    task.completed = true;
    task.date = new Date();
    this.taskListPending.splice(index, 1);
    this.taskListCompleted.push(task);
  }


  toggleShowCompleted() {
    this.showCompleted = !this.showCompleted
  }
}
