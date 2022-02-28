import { Component, OnInit} from '@angular/core';
import * as uuid from "uuid";
import { Tasks } from '../models/tasks';
import { TabType } from '../models/simple-todo';
import { LocalStorageService } from '../services/local-storage.service';
import { Config } from '../models/config';

@Component({
  selector: 'app-simple-todo',
  templateUrl: './simple-todo.component.html',
})
export class SimpleTodoComponent implements OnInit {
  public tabTypeEnum = TabType;
  tabActive: number = this.tabTypeEnum.ALL;
  config: Config = {
    isThemeDark: true,
  };
  tasks: Tasks[] = [];
  valueInputTask: string = '';

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.config = this.localStorageService.getConfig();
    this.tasks = this.localStorageService.getTask();
  }

  changeTheme(): void {
    this.config.isThemeDark = !this.config.isThemeDark;
    this.localStorageService.setConfig(this.config);
  }

  addTask(): void {
    if (this.valueInputTask.trim() !== '') {
      const newId = uuid.v4();
      const newTask = {
        id: newId,
        title: this.valueInputTask.trim(),
        isComplete: false,
      };

      this.tasks.push(newTask);
      this.localStorageService.setTask(this.tasks);
      this.valueInputTask = '';
    }
  }

  changeTask(task: Tasks): void {
    const indexTask = this.tasks.indexOf(task);
    this.tasks[indexTask].isComplete = !this.tasks[indexTask].isComplete;
    this.localStorageService.setTask(this.tasks);
  }

  deleteTask(task: Tasks): void {
    this.tasks = this.tasks.filter((talk) => talk.id !== task.id);
    this.localStorageService.setTask(this.tasks);
  }
}
