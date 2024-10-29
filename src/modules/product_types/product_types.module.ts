import { Module } from '@nestjs/common';
import { ProductTypesService } from './product_types.service';
import { ProductTypesController } from './product_types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductType } from './entities/product_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductType])],
  controllers: [ProductTypesController],
  providers: [ProductTypesService],
  exports: [ProductTypesService],
})
export class ProductTypesModule {}
