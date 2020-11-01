import { Controller, Get, Post } from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller('examples')
export class ExampleController {

    constructor(
        private exampleService: ExampleService
    ) { }

    @Get()
    findAll() {
        return this.exampleService.findAll();
    }

    @Post()
    create(example) {
        return this.exampleService.create(example);
    }
}
