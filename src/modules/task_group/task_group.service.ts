import { Injectable } from '@nestjs/common';
import { CreateTaskGroupDto } from './dto/create-task_group.dto';
import { UpdateTaskGroupDto } from './dto/update-task_group.dto';

@Injectable()
export class TaskGroupService {
  create(createTaskGroupDto: CreateTaskGroupDto) {
    return 'This action adds a new taskGroup';
  }

  findAll() {
    return `This action returns all taskGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taskGroup`;
  }

  update(id: number, updateTaskGroupDto: UpdateTaskGroupDto) {
    return `This action updates a #${id} taskGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskGroup`;
  }
}
