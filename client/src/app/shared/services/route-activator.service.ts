import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteActivatorService implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate() {
    if (!this.authService.isUserAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
