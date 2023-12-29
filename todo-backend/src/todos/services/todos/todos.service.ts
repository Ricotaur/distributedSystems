import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoParams, UpdateTodoParams } from 'src/todos/utils/types';
import { Todo } from 'src/typeorm/entities/Todo';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}
  fetchTodos() {
    return this.todoRepository.find();
  }
  createTodo(todoDetails: CreateTodoParams) {
    const newTodo = this.todoRepository.create({ ...todoDetails });
    return this.todoRepository.save(newTodo);
  }
  updateTodo(id: number, updateTodoDetails: UpdateTodoParams) {
    return this.todoRepository.update(id, { ...updateTodoDetails });
  }
  deleteTodo(id: number) {
    return this.todoRepository.delete(id);
  }
}
