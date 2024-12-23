import { Test, TestingModule } from '@nestjs/testing';
import { OfficePositionController } from './office_position.controller';
import { OfficePositionService } from './office_position.service';

describe('OfficePositionController', () => {
  let controller: OfficePositionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfficePositionController],
      providers: [OfficePositionService],
    }).compile();

    controller = module.get<OfficePositionController>(OfficePositionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
