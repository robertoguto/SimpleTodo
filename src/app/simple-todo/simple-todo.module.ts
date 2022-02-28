import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTodoComponent } from './simple-todo.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    SimpleTodoComponent,
    TasksListComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class SimpleTodoModule { }
