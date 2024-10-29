import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductSampleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  productLineId: number;
}
