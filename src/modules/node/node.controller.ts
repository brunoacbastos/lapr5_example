import { Controller, Post, Get, Put, Delete } from '@nestjs/common';
import { NodeService } from './node.service';

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
