import { Injectable } from '@nestjs/common';
import { CreateProductLineDto } from './dto/create-product_line.dto';
import { UpdateProductLineDto } from './dto/update-product_line.dto';

@Injectable()
export class ProductLinesService {
  create(createProductLineDto: CreateProductLineDto) {
    return 'This action adds a new productLine';
  }

  findAll() {
    return `This action returns all productLines`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productLine`;
  }

  update(id: number, updateProductLineDto: UpdateProductLineDto) {
    return `This action updates a #${id} productLine`;
  }

  remove(id: number) {
    return `This action removes a #${id} productLine`;
  }
}
