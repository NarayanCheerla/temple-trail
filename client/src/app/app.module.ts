import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppHeaderModule, AppFooterModule } from './shared/index';
import { AppRoutingModule } from './app-routing.module';
import {
  LoginComponent,
  DashboardComponent,
  FormDetailsComponent,
  SearchDetailsComponent,
  DonorsListComponent
} from './features/index';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppHeaderModule,
    AppFooterModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FormDetailsComponent,
    SearchDetailsComponent,
    DonorsListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
