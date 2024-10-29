import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductLineDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  productTypeId: number;
}
