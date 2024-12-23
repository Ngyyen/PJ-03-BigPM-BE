import { Module } from '@nestjs/common';
import { JobPositionService } from './job_position.service';
import { JobPositionController } from './job_position.controller';

@Module({
  controllers: [JobPositionController],
  providers: [JobPositionService],
})
export class JobPositionModule {}
