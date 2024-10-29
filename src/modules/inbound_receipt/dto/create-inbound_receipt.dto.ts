import { IsNotEmpty } from 'class-validator';

export class CreateInboundReceiptDto {
  @IsNotEmpty()
  totalPrice: number;

  @IsNotEmpty()
  isReceived: number;

  @IsNotEmpty()
  isPaid: number;

  @IsNotEmpty()
  staffId: number;

  @IsNotEmpty()
  supplierId: number;
}
