import { Module } from '@nestjs/common';
import { ParametersService } from './parameters.service';
import { ParametersController } from './parameters.controller';
import { Parameters } from './entities/parameter.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Parameters])],
  controllers: [ParametersController],
  providers: [ParametersService],
})
export class ParametersModule {}
