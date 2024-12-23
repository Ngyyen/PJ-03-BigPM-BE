import { Module } from '@nestjs/common';
import { TaskGroupService } from './task_group.service';
import { TaskGroupController } from './task_group.controller';

@Module({
  controllers: [TaskGroupController],
  providers: [TaskGroupService],
})
export class TaskGroupModule {}
