import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  links = [
    { label: 'Login', route: '/login', icon: '' },
    { label: 'Dashboard', route: '/dashboard', icon: 'home' },
    { label: 'Add Details', route: '/addDetails', icon: 'add_circle_outline' },
    { label: 'Search', route: '/search', icon: 'search' },
    { label: 'Donors', route: '/donors', icon: 'group' }
  ];

  activeLink = this.links[0].label;

  constructor() { }

  ngOnInit() {}

}
