import { Component } from '@angular/core'
import { TaskService } from '../tasks/task.service'
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  tasks = []
  constructor(taskService: TaskService) {
    this.tasks = taskService.getTasks()
  }

}