import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../data.service';
@Component({
  selector: 'app-shop-cards',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './shop-cards.component.html',
  styleUrl: './shop-cards.component.scss',
})
export class ShopCardsComponent implements OnInit {
  dataService = inject(DataService);
  shopItems$ = new BehaviorSubject<{ title: string }[]>([]);
  ngOnInit(): void {
    this.shopItems$.next(this.dataService.shopItems);
  }
  deleteShopItem(id: string) {
    console.log('Deleted');
    const filter = this.shopItems$.value.filter((p) => p.title !== id);
    this.shopItems$.next(filter);
  }
}
