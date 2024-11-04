import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProductUnitDto {
  @IsNotEmpty()
  @IsString()
  volumne: string;

  @IsNotEmpty()
  sell_price: number;

  @IsNotEmpty()
  conversion_rate: number;

  @IsOptional()
  @IsString()
  image: string;

  @IsNotEmpty()
  productSampleId?: number;

  @IsNotEmpty()
  unitId?: number;
}
