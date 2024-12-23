import { Attachment } from "src/modules/attachment/entities/attachment.entity";
import { Comment } from "src/modules/comment/entities/comment.entity";
import { Project } from "src/modules/project/entities/project.entity";
import { TaskGroup } from "src/modules/task_group/entities/task_group.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Project, (project) => project.tasks)
  @JoinColumn()
  project: Project;

  @ManyToOne(() => TaskGroup, (taskGroup) => taskGroup.tasks)
  @JoinColumn()
  taskGroup: TaskGroup;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  actual_start_date: Date;

  @Column()
  early_start: Date;

  @Column()
  late_start: Date;

  @Column()
  early_finish: Date;

  @Column()
  late_finish: Date;

  @Column()
  completion_date: Date;

  @Column()
  status: string;

  @Column()
  progress: number;

  @Column()
  order: number;

  @OneToMany(() => Task, (task) => task.relateBackwardTask)
  relateForwardTasks: Task[];

  @ManyToOne(() => Task, (task) => task.relateForwardTasks)
  relateBackwardTask: Task;

  @ManyToMany(() => User, (user) => user.tasks)
  @JoinTable({
    name: 'task_assignment',
    joinColumn: { name: 'taskId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'userId', referencedColumnName: 'id' },
  })
  users: User[];

  @OneToMany(() => Comment, (comment) => comment.task)
  comments: Comment[];

  @OneToMany(() => Attachment, (attachment) => attachment.task)
  attachments: Attachment[];
}
