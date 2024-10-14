import { Test, TestingModule } from '@nestjs/testing';
import { ProductLinesController } from './product_lines.controller';
import { ProductLinesService } from './product_lines.service';

describe('ProductLinesController', () => {
  let controller: ProductLinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductLinesController],
      providers: [ProductLinesService],
    }).compile();

    controller = module.get<ProductLinesController>(ProductLinesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
