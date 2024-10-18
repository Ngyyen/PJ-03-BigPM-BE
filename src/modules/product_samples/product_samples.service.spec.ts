import { Test, TestingModule } from '@nestjs/testing';
import { ProductSamplesService } from './product_samples.service';

describe('ProductSamplesService', () => {
  let service: ProductSamplesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductSamplesService],
    }).compile();

    service = module.get<ProductSamplesService>(ProductSamplesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
