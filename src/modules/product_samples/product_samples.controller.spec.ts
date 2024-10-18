import { Test, TestingModule } from '@nestjs/testing';
import { ProductSamplesController } from './product_samples.controller';
import { ProductSamplesService } from './product_samples.service';

describe('ProductSamplesController', () => {
  let controller: ProductSamplesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductSamplesController],
      providers: [ProductSamplesService],
    }).compile();

    controller = module.get<ProductSamplesController>(ProductSamplesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
