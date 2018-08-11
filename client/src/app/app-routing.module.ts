import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DonorsListComponent } from './features/donors-list/donors-list.component';
import { FormDetailsComponent } from './features/form-details/form-details.component';
import { LoginComponent } from './features/login/login.component';
import { SearchDetailsComponent } from './features/search-details/search-details.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'donors', component: DonorsListComponent },
  { path: 'addDetails', component: FormDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchDetailsComponent },
  { path: '*', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}