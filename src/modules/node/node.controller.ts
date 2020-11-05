import { Controller, Post, Get, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NodeService } from './node.service';

@ApiTags('nodes')
@Controller('nodes')
export class NodeController {

    constructor(
        private nodeService: NodeService
    ) { }

    @Post()
    create() {

    }

    @Get()
    read() {

    }

    @Put() 
    update(){

    }

    @Delete() 
    delete(){

    }
}
