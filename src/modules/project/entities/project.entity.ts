import { Task } from "src/modules/task/entities/task.entity";
import { TaskGroup } from "src/modules/task_group/entities/task_group.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
  
  @Column()
  objective: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  status: string;

  @Column()
  progress: number;

  @CreateDateColumn()
  createAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToMany(() => User, (user) => user.projects)
  @JoinTable({
    name: 'project_assignment',
    joinColumn: { name: 'projectId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'userId', referencedColumnName: 'id' },
  })
  users: User[];

  @OneToMany(() => TaskGroup, (taskGroup) => taskGroup.project)
  taskGroups: TaskGroup[];

  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];
}
