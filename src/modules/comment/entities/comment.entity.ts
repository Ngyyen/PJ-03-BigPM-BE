import { Task } from "src/modules/task/entities/task.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Task, (task) => task.comments)
  @JoinColumn()
  task: Task;

  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn()
  user: User;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
