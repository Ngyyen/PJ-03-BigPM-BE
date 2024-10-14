import { Module } from '@nestjs/common';
import { BatchsService } from './batchs.service';
import { BatchsController } from './batchs.controller';

@Module({
  controllers: [BatchsController],
  providers: [BatchsService],
})
export class BatchsModule {}
