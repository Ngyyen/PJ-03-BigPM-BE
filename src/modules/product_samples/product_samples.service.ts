import { Injectable } from '@nestjs/common';
import { CreateProductSampleDto } from './dto/create-product_sample.dto';
import { UpdateProductSampleDto } from './dto/update-product_sample.dto';

@Injectable()
export class ProductSamplesService {
  create(createProductSampleDto: CreateProductSampleDto) {
    return 'This action adds a new productSample';
  }

  findAll() {
    return `This action returns all productSamples`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productSample`;
  }

  update(id: number, updateProductSampleDto: UpdateProductSampleDto) {
    return `This action updates a #${id} productSample`;
  }

  remove(id: number) {
    return `This action removes a #${id} productSample`;
  }
}
