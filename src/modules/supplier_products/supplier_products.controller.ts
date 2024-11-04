import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { SupplierProductsService } from './supplier_products.service';
import { UpdateSupplierProductDto } from './dto/update-supplier_product.dto';

@Controller('supplier-products')
export class SupplierProductsController {
  constructor(
    private readonly supplierProductsService: SupplierProductsService,
  ) {}

  @Get()
  findAll(
    @Query() query: string,
    @Query('current') current: string,
    @Query('pageSize') pageSize: string,
  ) {
    return this.supplierProductsService.findAll(query, +current, +pageSize);
  }

  // @Patch(':id')
  // async update(
  //   @Param('id', ParseIntPipe) supplierId: number,
  //   @Body(ValidationPipe) updateSupplierProductDto: UpdateSupplierProductDto,
  // ) {
  //   return await this.supplierProductsService.update(
  //     supplierId,
  //     updateSupplierProductDto,
  //   );
  // }
}
