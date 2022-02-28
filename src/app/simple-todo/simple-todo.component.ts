import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Tasks } from '../models/tasks';
import { TabType } from '../models/simple-todo';

@Component({
  selector: 'app-simple-todo',
  templateUrl: './simple-todo.component.html'
})
export class SimpleTodoComponent implements OnInit {
  @ViewChildren('tab') tabs?: QueryList<ElementRef<HTMLButtonElement>>;

  public tabTypeEnum = TabType;
  theme: boolean = true;
  tabActive: number = this.tabTypeEnum.ALL;
  tasks: Tasks[] = [
    {
      id: 1,
      title: 'Teste',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Teste2',
      isComplete: true,
    },
    {
      id: 3,
      title: 'Teste3',
      isComplete: false,
    }
  ];

  constructor(
  ) { }

  ngOnInit(): void {

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
      const newId = this.tasks.length <= 0 ? 1 : this.tasks[this.tasks.length - 1].id;

      const newTask = {
        id: newId,
        title: input.value.trim(),
        isComplete: false,
      }

      this.tasks.push(newTask);
    }
  }

  changeTask(task: Tasks): void {
    const indexTask = this.tasks.indexOf(task);
    this.tasks[indexTask].isComplete = !this.tasks[indexTask].isComplete;
    console.log(this.tasks[this.tasks.length - 1].id++);
  }

  deleteTask(task: Tasks): void {
    this.tasks = this.tasks.filter(talk => talk.id !== task.id);
  }
}


