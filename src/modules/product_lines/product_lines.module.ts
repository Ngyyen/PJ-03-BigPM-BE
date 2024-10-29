import { Module } from '@nestjs/common';
import { ProductLinesService } from './product_lines.service';
import { ProductLinesController } from './product_lines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductLine } from './entities/product_line.entity';
import { ProductTypesModule } from '../product_types/product_types.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProductLine]), ProductTypesModule],
  controllers: [ProductLinesController],
  providers: [ProductLinesService],
  exports: [ProductLinesService],
})
export class ProductLinesModule {}
