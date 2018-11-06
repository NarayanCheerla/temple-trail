import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';
import { AppHeaderComponent } from './app-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule
  ],
  declarations: [ AppHeaderComponent ],
  exports: [ AppHeaderComponent ]
})
export class AppHeaderModule { }
