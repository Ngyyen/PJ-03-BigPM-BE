import { Module } from '@nestjs/common';
import { ProductSamplesService } from './product_samples.service';
import { ProductSamplesController } from './product_samples.controller';

@Module({
  controllers: [ProductSamplesController],
  providers: [ProductSamplesService],
})
export class ProductSamplesModule {}
