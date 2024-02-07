import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from '../data.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
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
