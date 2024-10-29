import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateSupplierProductDto {
  @IsNotEmpty()
  @IsArray()
  productSampleIds: number[];
}
