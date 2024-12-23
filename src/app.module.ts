import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { GroupsModule } from './modules/groups/groups.module';
import { RolesModule } from './modules/roles/roles.module';
import { ParametersModule } from './modules/parameters/parameters.module';
import { User } from './modules/users/entities/user.entity';
import { Group } from './modules/groups/entities/group.entity';
import { Parameters } from './modules/parameters/entities/parameter.entity';
import { Role } from './modules/roles/entities/role.entity';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from './interceptors/transform.response.interceptor';
import { AllExceptionsFilter } from './filters/exceptions.filter';
import { OfficePosition } from './modules/office_position/entities/office_position.entity';
import { JobPosition } from './modules/job_position/entities/job_position.entity';
import { Project } from './modules/project/entities/project.entity';
import { TaskGroup } from './modules/task_group/entities/task_group.entity';
import { Task } from './modules/task/entities/task.entity';
import { Comment } from './modules/comment/entities/comment.entity';
import { Attachment } from './modules/attachment/entities/attachment.entity';

@Module({
  imports: [
    UsersModule,
    GroupsModule,
    RolesModule,
    OfficePosition,
    JobPosition,
    Project,
    TaskGroup,
    Task,
    Comment,
    Attachment,
    ParametersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Admin@123',
      database: 'PROJECT_MANAGEMENT',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      User,
      Group,
      Role,
      OfficePosition,
      JobPosition,
      Project,
      TaskGroup,
      Task,
      Comment,
      Attachment,
      Parameters,
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
