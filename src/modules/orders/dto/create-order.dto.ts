import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  total_price: number;

  @IsNotEmpty()
  payment_method: string;

  @IsNotEmpty()
  payment_time: Date;

  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  customerId: number;

  @IsNotEmpty()
  staffId: number;
}
