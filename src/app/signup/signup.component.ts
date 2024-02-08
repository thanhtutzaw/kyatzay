import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  isShow = false;
  signUpLoading = false;
  constructor(private router: Router) {}
  togglePasswordType(event:Event) {
    event.preventDefault();
    this.isShow = !this.isShow;
  }
  onSubmit(event: Event) {
    event.preventDefault();
    this.signUpLoading = true;
    setTimeout(() => {
      this.signUpLoading = false;
      this.router.navigate(['/']);
    }, 1000);
  }
}
