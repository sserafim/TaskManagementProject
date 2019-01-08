import { TaskService } from './../service/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) {
  }

  ngOnInit() {
    this.taskService.getAllTasks().subscribe(data => {
        this.tasks = data;
    });
  }

  editTask(task: Task) {
    this.taskService.saveTask(task);
  }

}
