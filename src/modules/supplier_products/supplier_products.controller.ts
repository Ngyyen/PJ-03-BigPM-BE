import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SupplierProductsService } from './supplier_products.service';
import { CreateSupplierProductDto } from './dto/create-supplier_product.dto';
import { UpdateSupplierProductDto } from './dto/update-supplier_product.dto';

@Controller('supplier-products')
export class SupplierProductsController {
  constructor(private readonly supplierProductsService: SupplierProductsService) {}

  @Post()
  create(@Body() createSupplierProductDto: CreateSupplierProductDto) {
    return this.supplierProductsService.create(createSupplierProductDto);
  }

  @Get()
  findAll() {
    return this.supplierProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supplierProductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSupplierProductDto: UpdateSupplierProductDto) {
    return this.supplierProductsService.update(+id, updateSupplierProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supplierProductsService.remove(+id);
  }
}
