import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OfficePositionService } from './office_position.service';
import { CreateOfficePositionDto } from './dto/create-office_position.dto';
import { UpdateOfficePositionDto } from './dto/update-office_position.dto';

@Controller('office-position')
export class OfficePositionController {
  constructor(private readonly officePositionService: OfficePositionService) {}

  @Post()
  create(@Body() createOfficePositionDto: CreateOfficePositionDto) {
    return this.officePositionService.create(createOfficePositionDto);
  }

  @Get()
  findAll() {
    return this.officePositionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.officePositionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOfficePositionDto: UpdateOfficePositionDto) {
    return this.officePositionService.update(+id, updateOfficePositionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.officePositionService.remove(+id);
  }
}
