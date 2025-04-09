import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Info } from './app.interface';
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('/info')
    getInfo(): Info {
        return this.appService.getInfo();
    }
}
