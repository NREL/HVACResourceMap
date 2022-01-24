import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LaboratoriesRoutingModule } from './laboratories-routing.module';
import { LaboratoriesComponent } from './laboratories.component';


@NgModule({
  declarations: [
    LaboratoriesComponent
  ],
  imports: [
    CommonModule,
    LaboratoriesRoutingModule,
    SharedModule
  ]
})
export class LaboratoriesModule {
}
