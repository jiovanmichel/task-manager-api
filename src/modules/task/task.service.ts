import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
    getTasks(): object[] {
        return [
            {
                id: 1,
                title: 'Task 1',
                description: 'Description 1',
                completed: false,
            },
            {
                id: 2,
                title: 'Task 2',
                description: 'Description 2',
                completed: false,
            },
        ];
    }
}
