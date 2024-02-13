import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Role } from './role';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  currentUser$ = new BehaviorSubject<
    { email: string; password: string } | null | undefined
  >(undefined);

  logout() {
    if (typeof window !== 'undefined') {
      const localUser = localStorage.getItem('currentUser');
      const user: { email: string; password: string } | null | undefined =
        localUser ? JSON.parse(localUser) : null;
      if (user) {
        localStorage.removeItem('currentUser');
        this.currentUser$.next(null);
        this.router.navigate(['/login']);
        // this.cdr.detectChanges();
      }
    }
  }
  setCurrentUser() {
    if (typeof window !== 'undefined') {
      const localUser = localStorage.getItem('currentUser');
      const user: { email: string; password: string } | null | undefined =
        localUser ? JSON.parse(localUser) : null;
      if (user) {
        this.currentUser$.next(user);
      } else {
        this.currentUser$.next(null);
      }
    }
  }
  isFirstTime = true;
  isAuth = false;
  updateAuth(isAuth?: boolean) {
    this.isAuth = isAuth ?? false;
  }
  getUserRole(): Role {
    return Role.USER;
  }
}
