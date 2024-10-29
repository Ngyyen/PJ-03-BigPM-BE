import { Module } from '@nestjs/common';
import { InboundReceiptService } from './inbound_receipt.service';
import { InboundReceiptController } from './inbound_receipt.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InboundReceipt } from './entities/inbound_receipt.entity';
import { UsersModule } from '../users/users.module';
import { SuppliersModule } from '../suppliers/suppliers.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([InboundReceipt]),
    UsersModule,
    SuppliersModule,
  ],
  controllers: [InboundReceiptController],
  providers: [InboundReceiptService],
  exports: [InboundReceiptService],
})
export class InboundReceiptModule {}
