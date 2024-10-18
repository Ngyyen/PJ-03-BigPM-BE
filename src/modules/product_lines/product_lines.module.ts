import { Module } from '@nestjs/common';
import { ProductLinesService } from './product_lines.service';
import { ProductLinesController } from './product_lines.controller';

@Module({
  controllers: [ProductLinesController],
  providers: [ProductLinesService],
})
export class ProductLinesModule {}
