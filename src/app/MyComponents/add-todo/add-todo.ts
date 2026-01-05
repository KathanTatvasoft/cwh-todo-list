import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo.html',
})
export class AddTodo {
  title: string = '';
  desc: string = '';

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const newTodo: Todo = {
      sno: 7,              // ✅ hardcoded
      title: this.title,
      desc: this.desc,
      active: true         // ✅ hardcoded
    };

    this.todoAdd.emit(newTodo);

    // clear form
    this.title = '';
    this.desc = '';
  }
}
