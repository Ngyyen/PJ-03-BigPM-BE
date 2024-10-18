import { Module } from '@nestjs/common';
import { InboundReceiptService } from './inbound_receipt.service';
import { InboundReceiptController } from './inbound_receipt.controller';

@Module({
  controllers: [InboundReceiptController],
  providers: [InboundReceiptService],
})
export class InboundReceiptModule {}
