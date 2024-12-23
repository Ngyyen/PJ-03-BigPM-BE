import { Test, TestingModule } from '@nestjs/testing';
import { JobPositionController } from './job_position.controller';
import { JobPositionService } from './job_position.service';

describe('JobPositionController', () => {
  let controller: JobPositionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobPositionController],
      providers: [JobPositionService],
    }).compile();

    controller = module.get<JobPositionController>(JobPositionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
