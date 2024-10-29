import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from './entities/supplier.entity';
import { Repository } from 'typeorm';
import aqp from 'api-query-params';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(Supplier)
    private supplierRepository: Repository<Supplier>,
  ) {}

  async create(createSupplierDto: CreateSupplierDto) {
    const existingSupplier = await this.supplierRepository.findOne({
      where: { name: createSupplierDto.name },
    });

    if (existingSupplier) {
      throw new ConflictException('Tên nhà cung cấp đã tồn tại');
    }

    const supplier = this.supplierRepository.create(createSupplierDto);
    const savedSupplier = this.supplierRepository.save(supplier);
    return savedSupplier;
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

    const totalItems = await this.supplierRepository.count({ where: filter });
    const totalPages = Math.ceil(totalItems / pageSize);
    const skip = (current - 1) * pageSize;

    const options = {
      where: filter,
      relations: [],
      take: pageSize,
      skip: skip,
      order: sort,
    };

    const results = await this.supplierRepository.find(options);

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
    const supplier = await this.supplierRepository.findOne({
      where: { id },
    });

    if (!supplier) {
      throw new NotFoundException('Không tìm thấy nhà cung cấp');
    }

    return supplier;
  }

  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    const supplier = await this.findOne(id);
    if (!supplier) {
      throw new NotFoundException('Không tìm thấy nhà cung cấp');
    }

    if (updateSupplierDto.name && updateSupplierDto.name !== supplier.name) {
      const existingSupplierByName = await this.supplierRepository.findOne({
        where: { name: updateSupplierDto.name },
      });
      if (existingSupplierByName) {
        throw new ConflictException('Tên nhà cung cấp đã tồn tại');
      }
    }

    if (updateSupplierDto.phone && updateSupplierDto.phone !== supplier.phone) {
      const existingUserByPhone = await this.supplierRepository.findOne({
        where: { phone: updateSupplierDto.phone },
      });
      if (existingUserByPhone) {
        throw new ConflictException('Số điện thoại đã tồn tại');
      }
    }
    Object.assign(supplier, updateSupplierDto);
    const savedUser = await this.supplierRepository.save(supplier);
    return savedUser;
  }

  async remove(id: number) {
    const supplier = await this.findOne(id);
    if (!supplier) {
      throw new NotFoundException('Không tìm thấy nhà cung cấp');
    }
    await this.supplierRepository.softDelete(id);
    return supplier;
  }
}
