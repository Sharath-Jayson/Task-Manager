import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AppServiceService } from '../../app-service.service'
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(private appService: AppServiceService, private route: ActivatedRoute,private location: Location) { }
  task: Task;
  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.appService.getTask(id)
      .subscribe(task => this.task = task);
  }
  goBack(): void {
    this.location.back();
  }
}
