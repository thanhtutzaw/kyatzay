import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // items = this.cartService.getItems();

  // checkoutForm = this.formBuilder.group({
  //   name: '',
  //   address: '',
  // });

  // constructor(
  //   private cartService: CartService,
  //   private formBuilder: FormBuilder
  // ) {}
  title = 'kyatzay';
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
