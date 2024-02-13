import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';
import { ShopCardsComponent } from '../shop-cards/shop-cards.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, RouterOutlet, NgIf , ShopCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() {}
  authService = inject(AuthService);
  dataService = inject(DataService);
  // currentUser$ = this.authService.currentUser$.value;

  // checkoutForm = this.formBuilder.group({
  //   name: '',
  //   address: '',
  // });
}
