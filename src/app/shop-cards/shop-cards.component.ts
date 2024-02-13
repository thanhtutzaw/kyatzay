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
  shopItems$ = new BehaviorSubject<{ title: string; favorite: boolean , price:number }[]>([]);
  ngOnInit(): void {
    this.shopItems$.next(this.dataService.shopItems);
  }
  updateFavourite(newData: { id: string; title: string; createdAt: any }) {
    const isFound = this.dataService.myFavorite$.value.find(
      (fav) => fav.title === newData.id
    );
    if (isFound) {
      this.deleteFavourite(newData.title);
      return;
    }
    this.dataService.myFavorite$.next([
      ...this.dataService.myFavorite$.value,
      newData,
    ]);
  }
  updateCart(newData: { id: string; title: string; createdAt: any , price:number }) {
    const isFound = this.dataService.carts$.value.find(
      (fav) => fav.title === newData.id
    );
    if (isFound) {
      this.deleteCart(newData.title);
      return;
    }
    this.dataService.carts$.next([
      ...this.dataService.carts$.value,
      newData,
    ]);
  }
  toggleFavourite(id: string) {
    console.log('Updated Favorite');
    // const filter = this.shopItems$.value.filter((p) => p.title !== id);
    const updatedData = this.shopItems$.value.map((item) => {
      if (item.title === id) {
        // if (item.favorite) {
        //   this.deleteFavourite(id);
        // }
        return { ...item, favorite: !item.favorite };
      }
      return item;
    });
    this.shopItems$.next(updatedData);
  }
  deleteFavourite(id: string) {
    const filter = this.dataService.myFavorite$.value.filter(
      (fav) => fav.title !== id
    );
    this.dataService.myFavorite$.next(filter);
  }
  deleteCart(id: string) {
    const filter = this.dataService.carts$.value.filter(
      (fav) => fav.title !== id
    );
    this.dataService.carts$.next(filter);
  }
  deleteShopItem(id: string) {
    console.log('Deleted');
    const filter = this.shopItems$.value.filter((p) => p.title !== id);
    this.shopItems$.next(filter);
  }
}
