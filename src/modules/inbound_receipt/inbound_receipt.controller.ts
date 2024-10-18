import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InboundReceiptService } from './inbound_receipt.service';
import { CreateInboundReceiptDto } from './dto/create-inbound_receipt.dto';
import { UpdateInboundReceiptDto } from './dto/update-inbound_receipt.dto';

@Controller('inbound-receipt')
export class InboundReceiptController {
  constructor(private readonly inboundReceiptService: InboundReceiptService) {}

  @Post()
  create(@Body() createInboundReceiptDto: CreateInboundReceiptDto) {
    return this.inboundReceiptService.create(createInboundReceiptDto);
  }

  @Get()
  findAll() {
    return this.inboundReceiptService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inboundReceiptService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInboundReceiptDto: UpdateInboundReceiptDto) {
    return this.inboundReceiptService.update(+id, updateInboundReceiptDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inboundReceiptService.remove(+id);
  }
}
