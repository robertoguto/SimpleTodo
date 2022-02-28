import { Pipe, PipeTransform } from '@angular/core';
import { Tasks } from '../models/tasks';

@Pipe({
  name: 'tasksComplete'
})
export class TasksCompletePipe implements PipeTransform {

  transform(tasks: Tasks[]): any {
    if (tasks) {
      const talksActive = tasks.filter(talk => talk.isComplete === true);
      return talksActive
    }
    return null;
  }

}
