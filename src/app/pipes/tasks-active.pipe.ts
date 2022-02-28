import { Pipe, PipeTransform } from '@angular/core';
import { Tasks } from '../models/tasks';

@Pipe({
  name: 'tasksActive'
})
export class TasksActivePipe implements PipeTransform {

  transform(tasks: Tasks[]): any {
    if (tasks) {
      const talksActive = tasks.filter(talk => talk.isComplete === false);
      return talksActive
    }
    return null;
  }

}
