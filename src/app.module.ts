import { Module } from '@nestjs/common';
import { NodeModule } from './modules/node/node.module';
import { LineModule } from './modules/line/line.module';

@Module({
    imports: [NodeModule, LineModule],
    controllers: [],
    providers: [],
})

export class AppModule { }
