import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isShow = false;
  signInLoading = false;
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private router: Router, private authService: AuthService) {}
  togglePasswordType(event: Event) {
    event.preventDefault();
    console.log('toggle');
    this.isShow = !this.isShow;
  }
  onSubmit(event: Event) {
    event.preventDefault();
    if (this.loginForm.invalid) {
      console.log('Login Form Invalid');
      return;
    }
    console.log(this.loginForm.value);
    console.log('submiting');
    this.signInLoading = true;

    const localAccount = localStorage.getItem('currentUser');
    if (!localAccount) {
      this.signInLoading = false;
      alert('Not found any accounts!');
      return;
    }
    setTimeout(() => {
      this.signInLoading = false;
      const form = this.loginForm.value;
      const userJSON = localAccount ? JSON.parse(localAccount) : null;
      const { email, password } = userJSON;
      if (email !== form.email || password !== form.password) {
        alert('Failed to Authenticate !');
        return;
      }
      this.authService.setCurrentUser();
      this.authService.updateAuth(true);
      this.router.navigate(['/']);
    }, 1000);
  }
}
