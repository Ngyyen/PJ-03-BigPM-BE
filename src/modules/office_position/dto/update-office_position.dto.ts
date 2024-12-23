import { PartialType } from '@nestjs/mapped-types';
import { CreateOfficePositionDto } from './create-office_position.dto';

export class UpdateOfficePositionDto extends PartialType(CreateOfficePositionDto) {}
