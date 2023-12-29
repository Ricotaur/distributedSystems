import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from 'src/todos/dtos/CreateTodo.dto';
import { UpdateTodoDto } from 'src/todos/dtos/UpdateTodo.dto';
import { TodosService } from 'src/todos/services/todos/todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}
  @Get()
  async getTodos() {
    const todos = await this.todosService.fetchTodos();
    return todos;
  }
  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    this.todosService.createTodo(createTodoDto);
  }
  @Put(':id')
  async updateTodoById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    await this.todosService.updateTodo(id, updateTodoDto);
  }
  @Delete(':id')
  async deleteTodoById(@Param('id', ParseIntPipe) id: number) {
    await this.todosService.deleteTodo(id);
  }
}
