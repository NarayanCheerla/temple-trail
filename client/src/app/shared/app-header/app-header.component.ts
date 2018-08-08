import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  links = [
    {
      label: 'Login',
      route: '/login'
    },
    {
      label: 'Dashboard',
      route: '/dashboard'
    }
  ];
  activeLink = this.links[0].label;

  constructor() { }

  ngOnInit() {
  }

}
