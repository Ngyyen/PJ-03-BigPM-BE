import { Injectable } from '@nestjs/common';
import { CreateInboundReceiptDto } from './dto/create-inbound_receipt.dto';
import { UpdateInboundReceiptDto } from './dto/update-inbound_receipt.dto';

@Injectable()
export class InboundReceiptService {
  create(createInboundReceiptDto: CreateInboundReceiptDto) {
    return 'This action adds a new inboundReceipt';
  }

  findAll() {
    return `This action returns all inboundReceipt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inboundReceipt`;
  }

  update(id: number, updateInboundReceiptDto: UpdateInboundReceiptDto) {
    return `This action updates a #${id} inboundReceipt`;
  }

  remove(id: number) {
    return `This action removes a #${id} inboundReceipt`;
  }
}
