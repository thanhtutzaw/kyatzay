import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  ChildrenOutletContexts,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { slideInAnimation } from './animation';
import { AuthService } from './auth.service';
import { Counter } from './counter/counter.component';
import { SignupComponent } from './signup/signup.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Counter,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    SignupComponent,
    RouterModule,
    NgIf,
  ],
  // providers: [AuthService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
  constructor(
    private contexts: ChildrenOutletContexts // private authService: AuthService
  ) {}
  authService = inject(AuthService);
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
  ngOnInit(): void {
    this.authService.setCurrentUser();
  }
}
