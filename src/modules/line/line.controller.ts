import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LineService } from './line.service';

@ApiTags('lines')
@Controller('lines')
export class LineController {

    constructor(
        private lineService: LineService
    ) { }

    @Post()
    create(@Body() line) {
        return this.lineService.add(line);
    }

    @Get(':id')
    read(@Query('id') id: string) {
        return this.lineService.find(id);
    }

    @Get()
    readAll() {
        return this.lineService.findAll();
    }

    @Put(':id')
    update(@Query('id') id: string, @Body() data) {
        return this.lineService.modify(id, data);
    }

    @Delete(':id')
    delete(@Query('id') id: string) {
        return this.lineService.remove(id);
    }
}
