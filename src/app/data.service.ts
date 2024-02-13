import { Injectable } from '@angular/core';
import { BehaviorSubject, map, reduce } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  techStacks = [
    { title: 'Shopping Cart' },
    // { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
    // { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
    // {
    //   title: 'Angular Language Service',
    //   link: 'https://angular.dev/tools/language-service',
    // },
    {
      title: 'Payment with Stripe',
    },
    {
      title: 'Angular',
    },
    {
      title: 'Material',
    },
  ];
  shopItems = [
    { title: 'item1', favorite: false ,
  price:100},
    {
      title: 'item2',
      favorite: false,
      price:100
    },
    {
      title: 'item3',
      favorite: false,
      price:100
    },
    {
      title: 'item4',
      favorite: false,
      price:100
    },
  ];
  carts$ = new BehaviorSubject<{ title: string; createdAt: any , price:number }[]>([]);
  total$ = new BehaviorSubject<number>(0);
  // updateTotal(count: number) {
  //   this.total$.next(this.total$.value + count);
  // }
  myFavorite$ = new BehaviorSubject<{ title: string; createdAt: any }[]>([]);
  constructor() {
    // Subscribe to changes in the carts$ BehaviorSubject
    this.carts$
      .pipe(
        map((carts) => carts.map((cart) => cart.price)), // Extract prices from each cart item
        map((prices) => prices.reduce((acc, current) => acc + current, 0)) // Sum all prices
      )
      .subscribe((total) => this.total$.next(total)); // Update the total$
  }
}
