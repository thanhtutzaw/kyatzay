import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  // const authService = route.data['AuthService'];
  // const userRole: Role = inject(AuthService).getUserRole();
  // const expectedRoles = route.data['roles'];
  //   const isAuth = expectedRoles[0];
  // const { isAuth, isFirstTime } = route.data;
  //   const hasRole: boolean = expectedRoles.some((role) => userRole === role);
  //   return hasRole || router.navigate(['/login']);
  // const currentUser = authService.currentUser$.value;
  // const authExist =
  //   currentUser && currentUser.email && currentUser.password ? true : false;
  // if (isFirstTime && !authExist) {
  //   return router.navigate(['/welcome']);
  // }
  const currentUser = authService.currentUser$;
  const user = currentUser.value;
  const userExist = user && user.email;

  // if (isFirstTime) {
  //   router.navigate(['/welcome']);
  //   return false;
  // }
  return true;
  return currentUser.pipe(
    filter((filterdUser) => filterdUser !== undefined),
    map((user) => {
      // console.log(currentUser);
      if (!user) {
        router.navigate(['/login']);
        return false;
      }
      return true;
    })
  );
  // return authExist || router.navigate(['/login']);
};
