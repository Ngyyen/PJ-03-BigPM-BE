import { Task } from "src/modules/task/entities/task.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Attachment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  file_name: string;

  @Column()
  file_path: string;

  @CreateDateColumn()
  uploadedAt: Date;

  @ManyToOne(() => Task, (task) => task.attachments)
  @JoinColumn()
  task: Task;
}
