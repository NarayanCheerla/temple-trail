import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppHeaderModule, AppFooterModule } from './shared/index';
import { AppRoutingModule } from './app-routing.module';
import { FeaturesModule } from './features/features.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FeaturesModule,
    AppRoutingModule,
    AppHeaderModule,
    AppFooterModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
