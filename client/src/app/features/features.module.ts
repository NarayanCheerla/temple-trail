import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DonorsListComponent } from './donors-list/donors-list.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { LoginComponent } from './login/login.component';
import { SearchDetailsComponent } from './search-details/search-details.component';

import { RouteActivatorService } from '../shared/index';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
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
  ],
  providers: [
    RouteActivatorService
  ]
})
export class FeaturesModule { }
