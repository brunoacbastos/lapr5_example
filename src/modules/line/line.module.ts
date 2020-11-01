import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { lineProviders } from 'src/database/repository.providers';
import { LineController } from './line.controller';
import { LineService } from './line.service';

@Module({
  imports: [DatabaseModule],
  controllers: [LineController],
  providers: [...lineProviders, LineService]
})
export class LineModule {}
