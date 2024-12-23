import { Comment } from 'src/modules/comment/entities/comment.entity';
import { Group } from 'src/modules/groups/entities/group.entity';
import { JobPosition } from 'src/modules/job_position/entities/job_position.entity';
import { OfficePosition } from 'src/modules/office_position/entities/office_position.entity';
import { Project } from 'src/modules/project/entities/project.entity';
import { Task } from 'src/modules/task/entities/task.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  ManyToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Group, (group) => group.users)
  @JoinColumn()
  group: Group;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  avatar_image: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  hire_date: Date;

  @ManyToOne(() => OfficePosition, (officePosition) => officePosition.users)
  @JoinColumn()
  officePosition: OfficePosition;

  @ManyToOne(() => JobPosition, (jobPosition) => jobPosition.users)
  @JoinColumn()
  jobPosition: JobPosition;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToMany(() => Project, (project) => project.users)
  projects: Project[];

  @ManyToMany(() => Task, (task) => task.users)
  tasks: Task[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
