import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DonorsListComponent } from './donors-list/donors-list.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { LoginComponent } from './login/login.component';
import { SearchDetailsComponent } from './search-details/search-details.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule
  ],
  declarations: [
    DashboardComponent,
    DonorsListComponent,
    FormDetailsComponent,
    LoginComponent,
    SearchDetailsComponent
  ],
  exports: [
    DashboardComponent,
    DonorsListComponent,
    FormDetailsComponent,
    LoginComponent,
    SearchDetailsComponent
  ]
})
export class FeaturesModule { }
