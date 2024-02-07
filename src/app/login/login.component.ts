import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [MatButtonModule , RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isShow = false;
  signInLoading = false;
  constructor(private router: Router) {}
  togglePasswordType(event: Event) {
    event.preventDefault();
    console.log('toggle');
    this.isShow = !this.isShow;
  }
  onSubmit(event: Event) {
    event.preventDefault();
    console.log('submiting');
    this.signInLoading = true;
    setTimeout(() => {
      this.signInLoading = false;
      this.router.navigate(['/']);
    }, 1000);
  }
}
