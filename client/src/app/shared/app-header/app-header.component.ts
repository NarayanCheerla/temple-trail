import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  linksLeft = [
    { label: 'Dashboard', route: '/dashboard', icon: 'home' },
    { label: 'Donors', route: '/donors', icon: 'group' },
    { label: 'Add Details', route: '/addDetails', icon: 'add_circle_outline' }
  ];

  linksRight = [
    { label: 'Search', route: '/search', icon: 'search' },
    { label: 'Login', route: '/login', icon: 'vpn_key' }
  ];

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {}

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['/dashboard']);
  }
}
