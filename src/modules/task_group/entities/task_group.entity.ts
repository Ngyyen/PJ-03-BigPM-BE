import { Project } from "src/modules/project/entities/project.entity";
import { Task } from "src/modules/task/entities/task.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  order: number;

  @ManyToOne(() => Project, (project) => project.taskGroups)
  @JoinColumn()
  project: Project;

  @OneToMany(() => TaskGroup, (taskGroup) => taskGroup.parentTaskGroup)
  childTaskGroups: TaskGroup[];
  
  @ManyToOne(() => TaskGroup, (taskGroup) => taskGroup.childTaskGroups)
  parentTaskGroup: TaskGroup;

  @OneToMany(() => Task, (task) => task.taskGroup)
  tasks: Task[];
}
