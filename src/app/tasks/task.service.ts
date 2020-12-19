import { Injectable } from '@angular/core'
import { tasks } from './tasks'

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  getTasks() { 
    return tasks 
  }
}
