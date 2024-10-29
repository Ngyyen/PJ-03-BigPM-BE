import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductLineDto } from './dto/create-product_line.dto';
import { UpdateProductLineDto } from './dto/update-product_line.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductLine } from './entities/product_line.entity';
import { Repository } from 'typeorm';
import aqp from 'api-query-params';
import { ProductTypesService } from '../product_types/product_types.service';

@Injectable()
export class ProductLinesService {
  constructor(
    @InjectRepository(ProductLine)
    private productLineRepository: Repository<ProductLine>,
    private productTypesService: ProductTypesService,
  ) {}

  async create(createProductLineDto: CreateProductLineDto) {
    const existingProductLine = await this.productLineRepository.findOne({
      where: { name: createProductLineDto.name },
    });

    if (existingProductLine) {
      throw new ConflictException('Tên dòng sản phẩm đã tồn tại');
    }

    const productLine = this.productLineRepository.create(createProductLineDto);
    const productType = await this.productTypesService.findOne(
      +createProductLineDto.productTypeId,
    );

    productLine.productType = productType;
    const savedProductLine = this.productLineRepository.save(productLine);
    return savedProductLine;
  }

  async findAll(query: string, current: number, pageSize: number) {
    console.log(query);
    console.log(current, pageSize);

    const { filter, sort } = aqp(query);

    if (!current) current = 1;
    if (!pageSize) pageSize = 10;
    delete filter.current;
    delete filter.pageSize;

    console.log('filter', filter);
    console.log('sort', sort);

    const totalItems = await this.productLineRepository.count(filter);
    const totalPages = Math.ceil(totalItems / pageSize);
    const skip = (current - 1) * pageSize;

    const options = {
      where: {},
      relations: [],
      take: pageSize,
      skip: skip,
    };

    const results = await this.productLineRepository.find(options);

    return {
      meta: {
        current,
        pageSize,
        pages: totalPages,
        total: totalItems,
      },
      results,
    };
  }

  async findOne(id: number) {
    const productLine = await this.productLineRepository.findOne({
      where: { id },
    });

    if (!productLine) {
      throw new NotFoundException('Không tìm thấy dòng sản phẩm');
    }

    return productLine;
  }

  async update(id: number, updateProductLineDto: UpdateProductLineDto) {
    const productLine = await this.findOne(id);
    if (!productLine) {
      throw new NotFoundException('Không tìm thấy dòng sản phẩm');
    }

    if (
      updateProductLineDto.name &&
      updateProductLineDto.name !== productLine.name
    ) {
      const existingProductLineByName =
        await this.productLineRepository.findOne({
          where: { name: updateProductLineDto.name },
        });
      if (existingProductLineByName) {
        throw new ConflictException('Tên dòng sản phẩm đã tồn tại');
      }
    }

    Object.assign(productLine, updateProductLineDto);
    const savedUser = await this.productLineRepository.save(productLine);
    return savedUser;
  }

  async remove(id: number) {
    const productLine = await this.findOne(id);
    if (!productLine) {
      throw new NotFoundException('Không tìm thấy dòng sản phẩm');
    }
    await this.productLineRepository.softDelete(id);
    return productLine;
  }
}
