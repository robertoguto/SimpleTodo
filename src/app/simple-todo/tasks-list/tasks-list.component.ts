import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tasks } from 'src/app/models/tasks';
import { TabType } from '../../models/simple-todo';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html'
})
export class TasksListComponent implements OnInit {
  @Input() tabActive?: TabType;
  @Input() tasks?: Tasks[];
  @Output() changeCheck = new EventEmitter();
  @Output() deleteCheck = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeTask(task: Tasks): void {
    this.changeCheck.emit(task);
  }

  deleteTask(task: Tasks): void {
    this.deleteCheck.emit(task);
  }

}
