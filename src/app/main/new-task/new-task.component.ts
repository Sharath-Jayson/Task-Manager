import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { AppServiceService } from '../../app-service.service';
import { FormsModule, FormControl, FormGroup, FormControlName, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  taskList: Task[] = [];
  form: FormGroup;

  constructor(private appService: AppServiceService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
      assignedTo: new FormControl('', Validators.required),
    })
  }

  addTask(obj) {
    console.log(obj.value);
    obj.value.id = this.appService.taskList.length + 1
    this.appService.taskList.push(obj.value);
    this.form.reset()
  }
}
