import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  LinkDatas = [
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
  constructor() {}
}
