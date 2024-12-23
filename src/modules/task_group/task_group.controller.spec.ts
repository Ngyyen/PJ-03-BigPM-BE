import { Test, TestingModule } from '@nestjs/testing';
import { TaskGroupController } from './task_group.controller';
import { TaskGroupService } from './task_group.service';

describe('TaskGroupController', () => {
  let controller: TaskGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskGroupController],
      providers: [TaskGroupService],
    }).compile();

    controller = module.get<TaskGroupController>(TaskGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
