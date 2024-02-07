import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
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
