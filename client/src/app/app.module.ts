import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './shared/app-header/app-header.component';
import { AppFooterComponent } from './shared/app-footer/app-footer.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './features/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { FormDetailsComponent } from './features/form-details/form-details.component';
import { SearchDetailsComponent } from './features/search-details/search-details.component';
import { DonorsListComponent } from './features/donors-list/donors-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    LoginComponent,
    DashboardComponent,
    FormDetailsComponent,
    SearchDetailsComponent,
    DonorsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
