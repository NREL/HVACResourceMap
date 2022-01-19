import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LaboratoriesRoutingModule } from './laboratories-routing.module';
import { LaboratoriesComponent } from './laboratories.component';


@NgModule({
  declarations: [
    LaboratoriesComponent
  ],
  imports: [
    CommonModule,
    LaboratoriesRoutingModule
  ]
})
export class LaboratoriesModule {
}
