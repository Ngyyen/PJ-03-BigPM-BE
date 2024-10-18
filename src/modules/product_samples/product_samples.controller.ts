import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductSamplesService } from './product_samples.service';
import { CreateProductSampleDto } from './dto/create-product_sample.dto';
import { UpdateProductSampleDto } from './dto/update-product_sample.dto';

@Controller('product-samples')
export class ProductSamplesController {
  constructor(private readonly productSamplesService: ProductSamplesService) {}

  @Post()
  create(@Body() createProductSampleDto: CreateProductSampleDto) {
    return this.productSamplesService.create(createProductSampleDto);
  }

  @Get()
  findAll() {
    return this.productSamplesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productSamplesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductSampleDto: UpdateProductSampleDto) {
    return this.productSamplesService.update(+id, updateProductSampleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productSamplesService.remove(+id);
  }
}
