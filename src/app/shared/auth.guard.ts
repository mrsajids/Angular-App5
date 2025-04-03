import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    console.log('checking');
    const isLoggedIn = !!sessionStorage.getItem('token'); // Example check
    
    if (!isLoggedIn) {
      this.router.navigate(['/login']); // Redirect if not logged in
      return false;
    }
    return true;
  }
}
