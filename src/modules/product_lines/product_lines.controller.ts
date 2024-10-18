import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductLinesService } from './product_lines.service';
import { CreateProductLineDto } from './dto/create-product_line.dto';
import { UpdateProductLineDto } from './dto/update-product_line.dto';

@Controller('product-lines')
export class ProductLinesController {
  constructor(private readonly productLinesService: ProductLinesService) {}

  @Post()
  create(@Body() createProductLineDto: CreateProductLineDto) {
    return this.productLinesService.create(createProductLineDto);
  }

  @Get()
  findAll() {
    return this.productLinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productLinesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductLineDto: UpdateProductLineDto) {
    return this.productLinesService.update(+id, updateProductLineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productLinesService.remove(+id);
  }
}
