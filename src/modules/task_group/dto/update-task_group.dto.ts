import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskGroupDto } from './create-task_group.dto';

export class UpdateTaskGroupDto extends PartialType(CreateTaskGroupDto) {}
