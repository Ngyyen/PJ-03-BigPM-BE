import { Module } from '@nestjs/common';
import { SupplierProductsService } from './supplier_products.service';
import { SupplierProductsController } from './supplier_products.controller';

@Module({
  controllers: [SupplierProductsController],
  providers: [SupplierProductsService],
})
export class SupplierProductsModule {}
