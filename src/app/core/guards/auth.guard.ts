import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree => {
  const authService: AuthService = inject(AuthService);
  const token: string = authService.getToken();
  const tokenValid = token !== null && !authService.isTokenExpired(token);
  const router: Router = inject(Router);

  // TODO remove
  return true;
  if (!tokenValid) {
    router.navigate(['login']);
  }
  const isUserAdmin = authService.isAdmin();
  const routeWantAdminRole = (route?.data && route?.data['admin']) ?? false;
  const roleValid = !routeWantAdminRole || isUserAdmin;
  if (!roleValid) {
    router.navigate(['dashboard']);
  }

  //return tokenValid && roleValid;
  return true;
};

