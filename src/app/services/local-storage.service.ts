import { Injectable } from '@angular/core';
import { Config } from '../models/config';
import { Tasks } from '../models/tasks';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setTask(tasks: Tasks[]): void {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  getTask(): Tasks[] {
    const tasks = window.localStorage.getItem("tasks") || "[]";
    return JSON.parse(tasks);
  }

  setConfig(config: Config): void {
    window.localStorage.setItem("config", JSON.stringify(config));
  }

  getConfig(): Config {
    const config = window.localStorage.getItem("config") || "{}";
    return JSON.parse(config);
  }
}
