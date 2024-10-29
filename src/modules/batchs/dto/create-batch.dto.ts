import { IsNotEmpty } from 'class-validator';

export class CreateBatchDto {
  @IsNotEmpty()
  inbound_price: number;

  @IsNotEmpty()
  sell_price: number;

  @IsNotEmpty()
  discount: number;

  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  inbound_quantity: number;

  @IsNotEmpty()
  expiredAt: Date;

  @IsNotEmpty()
  inboundReceiptId: number;

  @IsNotEmpty()
  productSampleId: number;
}
