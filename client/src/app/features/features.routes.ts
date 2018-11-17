import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DonorsListComponent } from './donors-list/donors-list.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { LoginComponent } from './login/login.component';
import { SearchDetailsComponent } from './search-details/search-details.component';

export const featuresRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'donors', component: DonorsListComponent },
  { path: 'addDetails', component: FormDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchDetailsComponent },
  { path: '*', component: LoginComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
