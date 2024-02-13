import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    data: {
      animation: 'HomePage',
    },
    canActivate: [authGuard],
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: { animation: 'WelcomePage' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: 'LoginPage' },
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  { title: 'hello', path: 'hello', component: HelloComponent },
  { path: '**', title: 'Not Found', component: NotFoundPageComponent },
];
// export const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'welcome', component: WelcomeComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'signup', component: SignupComponent },
//   { path: 'hello', component: HelloComponent },
//   { path: '**', component: NotFoundPageComponent }, // Not Found route
// ];
