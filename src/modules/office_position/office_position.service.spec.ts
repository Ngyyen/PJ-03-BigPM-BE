import { Test, TestingModule } from '@nestjs/testing';
import { OfficePositionService } from './office_position.service';

describe('OfficePositionService', () => {
  let service: OfficePositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfficePositionService],
    }).compile();

    service = module.get<OfficePositionService>(OfficePositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
