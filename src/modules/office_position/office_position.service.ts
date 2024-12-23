import { Injectable } from '@nestjs/common';
import { CreateOfficePositionDto } from './dto/create-office_position.dto';
import { UpdateOfficePositionDto } from './dto/update-office_position.dto';

@Injectable()
export class OfficePositionService {
  create(createOfficePositionDto: CreateOfficePositionDto) {
    return 'This action adds a new officePosition';
  }

  findAll() {
    return `This action returns all officePosition`;
  }

  findOne(id: number) {
    return `This action returns a #${id} officePosition`;
  }

  update(id: number, updateOfficePositionDto: UpdateOfficePositionDto) {
    return `This action updates a #${id} officePosition`;
  }

  remove(id: number) {
    return `This action removes a #${id} officePosition`;
  }
}
