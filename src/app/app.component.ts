import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter.component';
import { DataService } from './data.service';
import { SignupComponent } from './signup/signup.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Counter,
    MatButtonModule,
    SignupComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private dataService: DataService // private cartService: CartService // private formBuilder: FormBuilder
  ) {}
  items = this.dataService.LinkDatas;

  // items = this.cartService.getItems();

  // checkoutForm = this.formBuilder.group({
  //   name: '',
  //   address: '',
  // });
}
