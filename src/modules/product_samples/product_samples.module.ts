import { Module } from '@nestjs/common';
import { ProductSamplesService } from './product_samples.service';
import { ProductSamplesController } from './product_samples.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSample } from './entities/product_sample.entity';
import { ProductLinesModule } from '../product_lines/product_lines.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProductSample]), ProductLinesModule],
  controllers: [ProductSamplesController],
  providers: [ProductSamplesService],
  exports: [ProductSamplesService],
})
export class ProductSamplesModule {}
