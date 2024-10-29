import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { InboundReceiptService } from './inbound_receipt.service';
import { CreateInboundReceiptDto } from './dto/create-inbound_receipt.dto';
import { UpdateInboundReceiptDto } from './dto/update-inbound_receipt.dto';

@Controller('inbound-receipt')
export class InboundReceiptController {
  constructor(private readonly inboundReceiptService: InboundReceiptService) {}

  @Post()
  create(
    @Body(ValidationPipe) createInboundReceiptDto: CreateInboundReceiptDto,
  ) {
    return this.inboundReceiptService.create(createInboundReceiptDto);
  }

  @Get()
  findAll(
    @Query() query: string,
    @Query('current') current: string,
    @Query('pageSize') pageSize: string,
  ) {
    console.log('>> query', query);
    return this.inboundReceiptService.findAll(query, +current, +pageSize);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.inboundReceiptService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateInboundReceiptDto: UpdateInboundReceiptDto,
  ) {
    return this.inboundReceiptService.update(id, updateInboundReceiptDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.inboundReceiptService.remove(id);
  }
}
