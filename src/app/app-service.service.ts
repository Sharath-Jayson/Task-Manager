import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  taskList: Task[] = [
    {id: 1, name: "task1", priority: "high", description: "This is the description", assignedTo: "Sharath"},
    {id: 2, name: "task2", priority: "high", description: "This is the description", assignedTo: "Sharath"}];

  constructor() {
    
   }
   
   getTasks(): Observable<Task[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(this.taskList);
  }
  getTask(id: number): Observable<Task> {
    // TODO: send the message _after_ fetching the hero
    return of(this.taskList.find(task => task.id === id));
  }
}
