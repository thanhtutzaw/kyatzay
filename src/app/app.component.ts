import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  ChildrenOutletContexts,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { Counter } from './counter/counter.component';
import { DataService } from './data.service';
import { SignupComponent } from './signup/signup.component';
import { slideInAnimation } from './animation';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Counter,
    MatButtonModule,
    SignupComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations:[slideInAnimation]
})
export class AppComponent {
  constructor(
    private contexts: ChildrenOutletContexts,
    private dataService: DataService // private cartService: CartService // private formBuilder: FormBuilder
  ) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
  items = this.dataService.LinkDatas;

  // items = this.cartService.getItems();

  // checkoutForm = this.formBuilder.group({
  //   name: '',
  //   address: '',
  // });
}
