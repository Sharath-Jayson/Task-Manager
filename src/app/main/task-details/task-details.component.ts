import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppServiceService } from '../../app-service.service';

import { Task } from '../../task'
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {



  tasks: Task[];
  constructor(private appService: AppServiceService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.appService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }
  
  deleteTask(obj) {
    console.log(this)
    console.log(obj);
    for(var i=0; i<this.appService.taskList.length; i++) {
      if(obj.id === this.appService.taskList[i].id) {
        this.appService.taskList.splice(i, 1);        
      }
    }
  }
}
