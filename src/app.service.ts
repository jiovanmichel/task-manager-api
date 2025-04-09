import { Get, Injectable } from '@nestjs/common';
import { Info } from './app.interface';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }

    @Get('/info')
    getInfo(): Info {
        return {
            name: 'Api Tasks',
            framework: 'Node with NestJS',
            version: '1.0.0',
            description: 'Api management tasks',
            author: 'Jiovan Michel da Silva',
        };
    }
}
