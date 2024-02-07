import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class Counter {
  counter = 0;
  increment() {
    this.counter = this.counter + 100;
    return this.counter;
  }
  decrement() {
    this.counter = this.counter - 100;
    return this.counter;
  }
  incrementBy(count: number) {
    this.counter = this.counter + count;
  }
  reset() {
    const initialValue = 0;
    if (this.counter === initialValue) return;
    this.counter = initialValue;
    alert('reseted');
    return this.counter;
  }
}
