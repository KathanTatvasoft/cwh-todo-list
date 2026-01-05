import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoItem } from '../todo-item/todo-item';
import { AddTodo } from '../add-todo/add-todo';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItem, AddTodo],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos implements OnInit {
  todos: Todo[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        this.todos = JSON.parse(storedTodos);
      }
    }
  }

  addTodo(todo: Todo) {
    todo.sno = Date.now();
    this.todos.push(todo);
    this.saveTodos();
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.sno !== todo.sno);
    this.saveTodos();
  }

  toggleTodo(todo: Todo) {
  const index = this.todos.findIndex(t => t.sno === todo.sno);
  if (index !== -1) {
    this.todos[index].active = !this.todos[index].active;
    this.saveTodos();
  }
}

  private saveTodos() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
}
