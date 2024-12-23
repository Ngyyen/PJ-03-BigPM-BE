import { Module } from '@nestjs/common';
import { OfficePositionService } from './office_position.service';
import { OfficePositionController } from './office_position.controller';

@Module({
  controllers: [OfficePositionController],
  providers: [OfficePositionService],
})
export class OfficePositionModule {}
