import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { UpdateRoleGroupDto } from './dto/update-role-group.dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  findAll(
    @Query() query: string,
    @Query('current') current: string,
    @Query('pageSize') pageSize: string,
  ) {
    return this.rolesService.findAll(query, +current, +pageSize);
  }

  @Patch(':id')
  assignRolesToGroup(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateRoleGroupDto: UpdateRoleGroupDto,
  ) {
    return this.rolesService.assignRolesToGroup(id, updateRoleGroupDto);
  }
}
