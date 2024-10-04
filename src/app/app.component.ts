import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-first-workshop';
  count: number = 0;
  incrementNumber(): void {
    this.count++;
  }
  decrementNumber(): void {
    this.count--;
  }
  reset(): void {
    this.count = 0;
  }
}
