import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  imports: [MatButtonModule, RouterModule, ReactiveFormsModule],
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  isShow = false;
  signUpLoading = false;
  constructor(private router: Router) {}
  signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  togglePasswordType(event: Event) {
    event.preventDefault();
    this.isShow = !this.isShow;
  }
  onSubmit(event: Event) {
    event.preventDefault();
    if (this.signupForm.invalid) {
      console.log('singup form Invalid !');
      return;
    }
    this.signUpLoading = true;

    localStorage.setItem(
      'currentUser',
      JSON.stringify(this.signupForm.value)
      // JSON.stringify({ email: 'testuser@gmail.com', password: '111111' })
    );
    setTimeout(() => {
      this.signUpLoading = false;
      // this.toggleAuth();
      this.router.navigate(['/login']);
    }, 1000);
    setTimeout(() => {}, 1000);
  }
}
