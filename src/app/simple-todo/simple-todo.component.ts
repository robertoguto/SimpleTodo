import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Tasks } from '../models/tasks';
import { TabType } from '../models/simple-todo';
import { LocalStorageService } from '../services/local-storage.service';
import { Config } from '../models/config';

@Component({
  selector: 'app-simple-todo',
  templateUrl: './simple-todo.component.html'
})
export class SimpleTodoComponent implements OnInit {
  @ViewChildren('tab') tabs?: QueryList<ElementRef<HTMLButtonElement>>;

  public tabTypeEnum = TabType;
  config: Config = {
    isThemeDark: true
  }
  tabActive: number = this.tabTypeEnum.ALL;
  tasks: Tasks[] = [];

  constructor(
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.config = this.localStorageService.getConfig();
    this.tasks = this.localStorageService.getTask();
  }

  changeTheme(): void {
    this.config.isThemeDark = !this.config.isThemeDark;
    this.localStorageService.setConfig(this.config);
  }

  changeTab(element: HTMLButtonElement, tabNumber: TabType): void {
    this.tabs?.forEach((tab: ElementRef<HTMLButtonElement>) => {
      tab.nativeElement.classList.remove('content-tabs__tab--active')
    });

    element.classList.add('content-tabs__tab--active');
    this.tabActive = tabNumber;
  }

  addTask(input: HTMLInputElement): void {
    if (input.value.trim() !== '') {
      const newId = this.tasks.length <= 0 ? 1 : this.tasks[this.tasks.length - 1].id + 1;

      const newTask = {
        id: newId,
        title: input.value.trim(),
        isComplete: false,
      }

      this.tasks.push(newTask);
      this.localStorageService.setTask(this.tasks);
      input.value = '';
    }
  }

  changeTask(task: Tasks): void {
    const indexTask = this.tasks.indexOf(task);
    this.tasks[indexTask].isComplete = !this.tasks[indexTask].isComplete;
    this.localStorageService.setTask(this.tasks);
  }

  deleteTask(task: Tasks): void {
    this.tasks = this.tasks.filter(talk => talk.id !== task.id);
    this.localStorageService.setTask(this.tasks);
  }
}


