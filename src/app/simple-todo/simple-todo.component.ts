import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { TabType } from './simple-todo';

@Component({
  selector: 'app-simple-todo',
  templateUrl: './simple-todo.component.html'
})
export class SimpleTodoComponent implements OnInit {
  @ViewChildren('tab') tabs?: QueryList<ElementRef<HTMLButtonElement>>;

  public tabTypeEnum = TabType;
  theme: boolean = false;
  tabActive: number = this.tabTypeEnum.ALL;

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
    // console.log(input.value);
  }
}


