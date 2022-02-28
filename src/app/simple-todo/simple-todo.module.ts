import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTodoComponent } from './simple-todo.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SimpleTodoComponent,
    TasksListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
  ]
})
export class SimpleTodoModule { }
