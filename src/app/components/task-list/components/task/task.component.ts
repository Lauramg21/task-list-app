import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../../../models/task.model';
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [DatePipe,NgClass],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  @Input({ required: true }) task!: ITask;
  @Input() index: number = 0;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  @Output() complete: EventEmitter<number> = new EventEmitter<number>();


  removeTask(){
    this.remove.emit(this.index);
  }

  completeTask(){
    this.complete.emit(this.index);
  }
}
