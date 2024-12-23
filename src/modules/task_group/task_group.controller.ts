import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskGroupService } from './task_group.service';
import { CreateTaskGroupDto } from './dto/create-task_group.dto';
import { UpdateTaskGroupDto } from './dto/update-task_group.dto';

@Controller('task-group')
export class TaskGroupController {
  constructor(private readonly taskGroupService: TaskGroupService) {}

  @Post()
  create(@Body() createTaskGroupDto: CreateTaskGroupDto) {
    return this.taskGroupService.create(createTaskGroupDto);
  }

  @Get()
  findAll() {
    return this.taskGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskGroupDto: UpdateTaskGroupDto) {
    return this.taskGroupService.update(+id, updateTaskGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskGroupService.remove(+id);
  }
}
