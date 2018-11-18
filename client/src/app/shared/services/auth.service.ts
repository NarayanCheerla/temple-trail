import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserAuthenticated = false;

  constructor() { }

  checkUserLogin(username: string, password: string) {
    this.isUserAuthenticated = true;
    console.log('User Logged in');
  }

  logoutUser() {
    this.isUserAuthenticated = false;
    console.log('User Logged out');
  }
}
