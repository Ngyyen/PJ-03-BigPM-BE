import { PartialType } from '@nestjs/mapped-types';
import { CreateSupplierProductDto } from './create-supplier_product.dto';

export class UpdateSupplierProductDto extends PartialType(CreateSupplierProductDto) {}
