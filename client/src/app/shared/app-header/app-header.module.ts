import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';

import { AppHeaderComponent } from './app-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatMenuModule
  ],
  declarations: [ AppHeaderComponent ],
  exports: [ AppHeaderComponent ]
})
export class AppHeaderModule { }
