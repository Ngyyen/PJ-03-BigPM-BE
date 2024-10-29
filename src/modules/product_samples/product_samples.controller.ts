import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductSamplesService } from './product_samples.service';
import { CreateProductSampleDto } from './dto/create-product_sample.dto';
import { UpdateProductSampleDto } from './dto/update-product_sample.dto';

@Controller('product-samples')
export class ProductSamplesController {
  constructor(private readonly productSamplesService: ProductSamplesService) {}

  @Post()
  create(@Body(ValidationPipe) createProductSampleDto: CreateProductSampleDto) {
    return this.productSamplesService.create(createProductSampleDto);
  }

  @Get()
  findAll(
    @Query() query: string,
    // @Query('current', ParseIntPipe) current: number,
    // @Query('pageSize', ParseIntPipe) pageSize: number,
    @Query('current') current: string,
    @Query('pageSize') pageSize: string,
  ) {
    return this.productSamplesService.findAll(query, +current, +pageSize);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productSamplesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductSampleDto: UpdateProductSampleDto,
  ) {
    return this.productSamplesService.update(id, updateProductSampleDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productSamplesService.remove(id);
  }
}
