import { Injectable } from '@nestjs/common';
import { CreateSupplierProductDto } from './dto/create-supplier_product.dto';
import { UpdateSupplierProductDto } from './dto/update-supplier_product.dto';

@Injectable()
export class SupplierProductsService {
  create(createSupplierProductDto: CreateSupplierProductDto) {
    return 'This action adds a new supplierProduct';
  }

  findAll() {
    return `This action returns all supplierProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} supplierProduct`;
  }

  update(id: number, updateSupplierProductDto: UpdateSupplierProductDto) {
    return `This action updates a #${id} supplierProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} supplierProduct`;
  }
}
