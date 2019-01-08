import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Task } from '../model/task.model';

@Injectable()
export class TaskService {

    urlTasks = 'http://localhost:8080/tasks';

    constructor(private http: HttpClient) {

    }

    getAllTasks() {
        return this.http.get<Task[]>(this.urlTasks);
    }

    getOneById(id: number) {
        return this.http.get<Task[]>(this.urlTasks + '/' + id);
    }

    saveTask(task: Task) {
        return this.http.post(this.urlTasks, Task);
    }

    updateTask(task: Task) {
        return this.http.put(this.urlTasks, Task);
    }

    deleteTaks(id: number) {
        return this.http.delete(this.urlTasks + '/' + id);
    }



}
