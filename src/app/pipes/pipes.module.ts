import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksActivePipe } from './tasks-active.pipe';
import { TasksCompletePipe } from './tasks-complete.pipe';

@NgModule({
  declarations: [
    TasksActivePipe,
    TasksCompletePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TasksActivePipe,
    TasksCompletePipe
  ]
})
export class PipesModule {}
