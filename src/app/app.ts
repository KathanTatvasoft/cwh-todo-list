import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,   // 🔥 REQUIRED
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  appName = signal('todolist');

  constructor() {
    setTimeout(() => {
      this.appName.set('TO-DO-List');
    }, 3000);
  }
}
