import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'todos' })
export class Todo {
  @PrimaryGeneratedColumn()
  todo_id: number;

  @Column({ type: 'varchar' })
  todo_task: string;
}
