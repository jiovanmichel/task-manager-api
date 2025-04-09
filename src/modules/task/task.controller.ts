import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller()
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get('/tasks')
    getTasks(): object[] {
        return this.taskService.getTasks();
    }
}
