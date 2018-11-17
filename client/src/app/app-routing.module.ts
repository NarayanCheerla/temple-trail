import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { featuresRoutes } from './features/features.routes';

@NgModule({
  imports: [ RouterModule.forRoot(featuresRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}