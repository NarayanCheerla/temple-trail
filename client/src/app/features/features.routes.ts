import { Routes, CanActivate } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DonorsListComponent } from './donors-list/donors-list.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { LoginComponent } from './login/login.component';
import { SearchDetailsComponent } from './search-details/search-details.component';

import { RouteActivatorService } from '../shared/index';

export const featuresRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'donors', component: DonorsListComponent, canActivate: [ RouteActivatorService ] },
  { path: 'addDetails', component: FormDetailsComponent, canActivate: [ RouteActivatorService ] },
  { path: 'search', component: SearchDetailsComponent, canActivate: [ RouteActivatorService ] },
  { path: 'login', component: LoginComponent },
  { path: '*', component: LoginComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
